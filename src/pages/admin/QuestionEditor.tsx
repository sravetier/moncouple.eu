import React, { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';

interface Option {
  id: number;
  text: string;
  value: number;
}

interface Question {
  id: number;
  text: string;
  options: Option[];
}

interface QuestionEditorProps {
  initialQuestions?: Question[];
  onSave: (questions: Question[]) => void;
}

export default function QuestionEditor({ initialQuestions = [], onSave }: QuestionEditorProps) {
  const [questions, setQuestions] = useState<Question[]>(initialQuestions);

  const addQuestion = () => {
    const newQuestion: Question = {
      id: questions.length + 1,
      text: '',
      options: [
        { id: 1, text: '', value: 1 },
        { id: 2, text: '', value: 2 },
        { id: 3, text: '', value: 3 },
        { id: 4, text: '', value: 4 }
      ]
    };
    setQuestions([...questions, newQuestion]);
  };

  const updateQuestion = (index: number, field: string, value: string) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index] = {
      ...updatedQuestions[index],
      [field]: value
    };
    setQuestions(updatedQuestions);
  };

  const updateOption = (questionIndex: number, optionIndex: number, value: string) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options[optionIndex].text = value;
    setQuestions(updatedQuestions);
  };

  return (
    <div className="space-y-6">
      {questions.map((question, qIndex) => (
        <div key={question.id} className="bg-white p-6 rounded-lg shadow-sm">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Question {qIndex + 1}
            </label>
            <input
              type="text"
              value={question.text}
              onChange={(e) => updateQuestion(qIndex, 'text', e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="Saisissez votre question"
            />
          </div>

          <div className="space-y-3">
            {question.options.map((option, oIndex) => (
              <div key={option.id} className="flex items-center space-x-2">
                <span className="text-sm font-medium text-gray-500">
                  Option {oIndex + 1}
                </span>
                <input
                  type="text"
                  value={option.text}
                  onChange={(e) => updateOption(qIndex, oIndex, e.target.value)}
                  className="flex-1 border border-gray-300 rounded-md shadow-sm p-2"
                  placeholder={`Option ${oIndex + 1}`}
                />
                <span className="text-sm text-gray-500">Valeur: {option.value}</span>
              </div>
            ))}
          </div>

          <button
            onClick={() => {
              const filtered = questions.filter((_, index) => index !== qIndex);
              setQuestions(filtered);
            }}
            className="mt-4 flex items-center text-red-600 hover:text-red-700"
          >
            <Trash2 className="h-4 w-4 mr-1" />
            Supprimer la question
          </button>
        </div>
      ))}

      <div className="flex justify-between">
        <button
          onClick={addQuestion}
          className="flex items-center px-4 py-2 bg-[#85C196] text-white rounded-md hover:bg-[#75b086]"
        >
          <Plus className="h-5 w-5 mr-2" />
          Ajouter une question
        </button>

        <button
          onClick={() => onSave(questions)}
          className="px-4 py-2 bg-[#85C196] text-white rounded-md hover:bg-[#75b086]"
        >
          Enregistrer les questions
        </button>
      </div>
    </div>
  );
}