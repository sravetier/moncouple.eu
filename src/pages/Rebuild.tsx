import React from 'react';
import { Heart } from 'lucide-react';
import TestCarousel from '../components/TestCarousel';
import { rebuildTests } from '../data/rebuildTests';
import { practicalGuides } from '../data/practicalGuides';
import { Link } from 'react-router-dom';

export default function Rebuild() {
  // Filtrer uniquement les guides de la catégorie "rebuild"
  const rebuildGuides = practicalGuides.filter(guide => guide.category === 'rebuild');

  return (
    <div className="pt-16">
      <div className="bg-[#85C196] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-8">
            <Heart className="h-16 w-16" />
          </div>
          <h1 className="text-4xl font-bold text-center mb-4">Se reconstruire</h1>
          <p className="text-xl text-center max-w-2xl mx-auto">
            Un parcours personnalisé pour retrouver confiance et sérénité
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <TestCarousel 
            tests={rebuildTests}
            title="Faire le point sur soi et se repartir de l'avant"
            subtitle="Des tests pour vous aider à évaluer votre progression et identifier vos besoins"
          />
        </div>
        
        {rebuildGuides.length > 0 && (
          <div className="py-12">
            <h2 className="text-2xl font-bold mb-4">Fiches pratiques</h2>
            <p className="text-gray-600 mb-8">Des guides concrets pour vous accompagner dans votre reconstruction</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {rebuildGuides.map((guide) => (
                <Link
                  key={guide.id}
                  to={`/guide/${guide.id}`}
                  className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                >
                  <img
                    src={guide.image}
                    alt={guide.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{guide.title}</h3>
                    <p className="text-gray-600 mb-4">{guide.description}</p>
                    <span className="text-[#85C196] hover:text-[#75b086] font-medium inline-flex items-center">
                      Lire le guide
                      <Heart className="ml-2 h-4 w-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}