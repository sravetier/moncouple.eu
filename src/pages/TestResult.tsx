import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { tests } from '../data/tests';
import { personalTests } from '../data/personalTests';
import { rebuildTests } from '../data/rebuildTests';
import { CheckCircle, ArrowLeft } from 'lucide-react';

export default function TestResult() {
  const { testId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { score, analysis } = location.state || {};

  // Combinez les deux tableaux de tests
  const allTests = [...tests, ...rebuildTests, ...personalTests];
  const test = allTests.find(t => t.id === testId);

  if (!test || !analysis) {
    navigate('/assessment');
    return null;
  }

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <button
          onClick={() => navigate('/assessment')}
          className="flex items-center text-gray-600 hover:text-[#85C196] mb-8"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Retour aux tests
        </button>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="flex items-center justify-center mb-8">
            <CheckCircle className="h-16 w-16 text-[#85C196]" />
          </div>

          <h1 className="text-3xl font-bold text-center mb-4">
            Résultats de votre test
          </h1>

          <h2 className="text-xl font-semibold text-center text-gray-600 mb-8">
            {test.title}
          </h2>

          <div className="mb-8 p-6 bg-gray-50 rounded-lg">
            <p className="text-lg text-gray-700 leading-relaxed">
              {analysis}
            </p>
          </div>

          <div className="flex justify-center">
            <button
              onClick={() => navigate('/assessment')}
              className="px-6 py-3 bg-[#85C196] text-white rounded-lg hover:bg-[#75b086] transition-colors"
            >
              Découvrir d'autres tests
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}