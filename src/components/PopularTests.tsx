import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import evaluation_relation from '../images/evaluation_relation.jpg';
import bienEtreEmotionnel from '../images/bienEtreEmotionnel.jpg';

const tests = [
  {
    id: 'communication',
    title: "La communication dans votre couple",
    image: "https://images.unsplash.com/photo-1516575334481-f85287c2c82d?auto=format&fit=crop&q=80&w=800&h=500",
  },
  {
    id: 'evaluation-relation',
    title: "Évaluer la qualité de ma relation",
    image: evaluation_relation,
  },
  {
    id: 'bien-etre-emotionnel',
    title: "Mon bien-être émotionnel",
    image: bienEtreEmotionnel,
  }
];

export default function PopularTests() {
  const navigate = useNavigate();

  const handleTestClick = (testId: string) => {
    navigate(`/test/${testId}`);
  };

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Tests les plus populaires</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tests.map((test, index) => (
            <div
              key={index}
              onClick={() => handleTestClick(test.id)}
              className="group block cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={test.image}
                    alt={test.title}
                    className="object-cover w-full h-48 transform group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <div className="p-4 bg-white">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#85C196] transition-colors">
                    {test.title}
                  </h3>
                  <div className="mt-2 flex items-center text-[#85C196] opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm">Commencer le test</span>
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
