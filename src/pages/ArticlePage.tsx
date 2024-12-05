import { BookOpen, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { articleGuide } from '../data/articleGuide';

// Catégories d'articles avec leurs descriptions
const categories = {
  separation: {
    title: 'Bloublou',
    description: 'Guides pour vous accompagner dans les démarches de séparation',
    guides: articleGuide.filter(g => g.category === 'separation')
  },
  rebuild: {
    title: 'Se reconstruire',
    description: 'Ressources pour vous aider à avancer après une séparation',
    guides: articleGuide.filter(g => g.category === 'rebuild')
  },
  'save-relationship': {
    title: 'Sauver son couple',
    description: 'Guides pour enrichir et améliorer votre relation',
    guides: articleGuide.filter(g => g.category === 'save-relationship')
  }
};

export default function Library() {
  return (
    <div className="pt-16">
      <div className="bg-[#85C196] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-8">
            <BookOpen className="h-16 w-16" />
          </div>
          <h1 className="text-4xl font-bold text-center mb-4">Retrouvez tout nos articles</h1>
          <p className="text-xl text-center max-w-2xl mx-auto">
            Des témoignages et des enquêtes pour vous aider dans votre parcours
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {Object.entries(categories).map(([key, category]) => (
          <div key={key} className="mb-12">
            <h2 className="text-2xl font-bold mb-4">{category.title}</h2>
            <p className="text-gray-600 mb-6">{category.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.guides.map((guide) => (
                <Link
                  key={guide.id}
                  to={`/guide/${guide.id}`}
                  className="group block"
                >
                  <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                    <div className="aspect-w-16 aspect-h-9">
                      <img
                        src={guide.image}
                        alt={guide.title}
                        className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-200"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#85C196] transition-colors">
                        {guide.title}
                      </h3>
                      <p className="mt-2 text-gray-600">{guide.description}</p>
                      <div className="mt-4 flex items-center text-[#85C196]">
                        <span className="text-sm font-medium">Lire le guide</span>
                        <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}