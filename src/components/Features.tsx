import React from 'react';
import { Heart, Users, Sparkles, MessageSquare } from 'lucide-react';

const features = [
  {
    name: 'Faire le point sur son couple',
    description: 'Des quiz interactifs pour évaluer votre situation et identifier les points d\'amélioration.',
    icon: Heart,
  },
  {
    name: 'Accompagnement personnalisé',
    description: 'Des experts qualifiés disponibles pour vous guider à chaque étape de votre parcours.',
    icon: Users,
  },
  {
    name: 'Outils pratiques',
    description: 'Des ressources et exercices concrets pour renforcer votre relation au quotidien.',
    icon: Sparkles,
  },
  {
    name: 'Communauté bienveillante',
    description: 'Un forum modéré pour échanger et partager vos expériences en toute confidentialité.',
    icon: MessageSquare,
  },
];

export default function Features() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nos services pour vous accompagner
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Découvrez nos outils et ressources pour vous aider dans votre parcours.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#85C196] text-white mx-auto">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900 text-center">{feature.name}</h3>
                <p className="mt-2 text-base text-gray-500 text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}