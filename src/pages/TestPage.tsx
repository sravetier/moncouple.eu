import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { tests } from '../data/tests';
import { personalTests } from '../data/personalTests';
import { rebuildTests } from '../data/rebuildTests';
import { useTestStore } from '../store/testStore';

export default function TestPage() {
  const { testId } = useParams();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const addResult = useTestStore((state) => state.addResult);

  // Chercher le test dans toutes les collections de tests
  const test = [...tests, ...personalTests, ...rebuildTests].find(t => t.id === testId);

  if (!test) {
    return (
      <div className="min-h-screen pt-16 bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-900">Test non trouvé</h2>
          <button
            onClick={() => navigate(-1)}
            className="mt-4 text-[#85C196] hover:text-[#75b086] flex items-center justify-center mx-auto"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Retour
          </button>
        </div>
      </div>
    );
  }

  const handleAnswer = (value: number) => {
    const newAnswers = [...answers, value];
    
    if (newAnswers.length === test.questions.length) {
      const score = newAnswers.reduce((a, b) => a + b, 0);
      const analysis = test.getAnalysis(score);
      
      addResult({
        testId: test.id,
        date: new Date().toISOString(),
        score,
        analysis
      });

      navigate(`/test-result/${test.id}`, { 
        state: { score, analysis } 
      });
    } else {
      setAnswers(newAnswers);
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const question = test.questions[currentQuestion];

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-[#85C196] mb-8"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Retour aux tests
        </button>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="mb-8">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-[#85C196] h-2 rounded-full transition-all"
                style={{ width: `${(currentQuestion / test.questions.length) * 100}%` }}
              />
            </div>
            <div className="text-sm text-gray-500 mt-2">
              Question {currentQuestion + 1} sur {test.questions.length}
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6">{question.text}</h2>

          <div className="space-y-4">
            {question.options.map((option) => (
              <button
                key={option.id}
                onClick={() => handleAnswer(option.value)}
                className="w-full text-left p-4 rounded-lg border border-gray-200 hover:border-[#85C196] hover:bg-gray-50 transition-colors"
              >
                {option.text}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}