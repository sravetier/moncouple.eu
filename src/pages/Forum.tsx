import React from 'react';
import { MessageSquare, Users, PlusCircle, TrendingUp } from 'lucide-react';

const categories = [
  {
    name: "Communication",
    topics: 156,
    messages: 1243,
    lastActivity: "Il y a 5 min"
  },
  {
    name: "Séparation & Divorce",
    topics: 98,
    messages: 876,
    lastActivity: "Il y a 15 min"
  },
  {
    name: "Reconstruction personnelle",
    topics: 124,
    messages: 967,
    lastActivity: "Il y a 1 heure"
  },
  {
    name: "Vie de couple",
    topics: 203,
    messages: 1876,
    lastActivity: "Il y a 30 min"
  }
];

export default function Forum() {
  return (
    <div className="pt-16">
      <div className="bg-[#85C196] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-8">
            <MessageSquare className="h-16 w-16" />
          </div>
          <h1 className="text-4xl font-bold text-center mb-4">Forum</h1>
          <p className="text-xl text-center max-w-2xl mx-auto">
            Échangez avec une communauté bienveillante et trouvez du soutien
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <div className="flex space-x-4">
            <button className="flex items-center px-4 py-2 bg-[#85C196] text-white rounded-md hover:bg-[#75b086] transition-colors">
              <PlusCircle className="h-5 w-5 mr-2" />
              Nouveau sujet
            </button>
            <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md hover:border-[#85C196] hover:text-[#85C196] transition-colors">
              <TrendingUp className="h-5 w-5 mr-2" />
              Sujets populaires
            </button>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Rechercher dans le forum..."
              className="pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#85C196] focus:border-transparent"
            />
          </div>
        </div>

        <div className="space-y-4">
          {categories.map((category) => (
            <div key={category.name} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                  <div className="flex items-center space-x-6 text-sm text-gray-500">
                    <span className="flex items-center">
                      <MessageSquare className="h-4 w-4 mr-1" />
                      {category.topics} sujets
                    </span>
                    <span className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {category.messages} messages
                    </span>
                  </div>
                </div>
                <div className="text-sm text-gray-500">
                  Dernière activité: {category.lastActivity}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}