import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, MessageCircle, Users, Sparkles } from 'lucide-react';
import { practicalGuides } from '../data/practicalGuides';

const tools = [
  {
    icon: MessageCircle,
    title: "Communication",
    description: "Améliorez votre dialogue et apprenez à mieux vous comprendre",
    actions: [
      { text: "Exercices pratiques", link: "/guide/couples-communication" },
      { text: "Écoute active pour couples", link: "/guide/active-listening" },
      { text: "Gestion des conflits", link: "/guide/conflict-resolution" }
    ]
  },
  {
    icon: Heart,
    title: "Intimité",
    description: "Retrouvez la connexion émotionnelle et physique",
    actions: [
      { text: "Exercices de connexion", link: "/guide/emotional-connection" },
      { text: "Moments de partage", link: "/guide/quality-time" },
      { text: "Rituels de couple", link: "/guide/couple-rituals" }
    ]
  },
  {
    icon: Users,
    title: "Accompagnement",
    description: "Un soutien professionnel adapté à vos besoins",
    actions: [
      { text: "Thérapie de couple", link: "/guide/couple-therapy" },
      { text: "Coaching relationnel", link: "/guide/relationship-coaching" },
      { text: "Ateliers pratiques", link: "/guide/relationship-workshops" }
    ]
  },
  {
    icon: Sparkles,
    title: "Développement",
    description: "Faites évoluer votre relation positivement",
    actions: [
      { text: "Projets communs", link: "/guide/shared-projects" },
      { text: "Objectifs de couple", link: "/guide/couple-goals" },
      { text: "Vision partagée", link: "/guide/shared-vision" }
    ]
  }
];

export default function SaveRelationship() {
  // Filtrer les guides de la catégorie "save-relationship"
  const relationshipGuides = practicalGuides.filter(guide => guide.category === 'save-relationship');

  return (
    <div className="pt-16">
      <div className="bg-[#85C196] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-4">Sauver son couple</h1>
          <p className="text-xl text-center max-w-2xl mx-auto">
            Des outils concrets pour renforcer votre relation et retrouver l'harmonie
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tools.map((tool) => (
            <div key={tool.title} className="bg-white rounded-lg shadow-sm p-8 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-6">
                <tool.icon className="h-12 w-12 text-[#85C196]" />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold">{tool.title}</h3>
                  <p className="text-gray-600">{tool.description}</p>
                </div>
              </div>
              <ul className="space-y-3">
                {tool.actions.map((action) => (
                  <li key={action.text}>
                    <Link
                      to={action.link}
                      className="flex items-center group"
                    >
                      <div className="h-2 w-2 bg-[#85C196] rounded-full mr-3"></div>
                      <span className="text-gray-700 group-hover:text-[#85C196] transition-colors">
                        {action.text}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {relationshipGuides.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8">Guides pratiques</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relationshipGuides.map((guide) => (
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