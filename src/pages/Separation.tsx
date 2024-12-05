import React from 'react';
import { Scale, FileText, Users, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const resources = [
  {
    title: "Aspects juridiques",
    description: "Comprendre vos droits et les démarches légales",
    icon: Scale,
    items: [
      { text: "Divorce à l'amiable", link: "/guide/amicable-divorce" },
      { text: "Garde des enfants", link: "/guide/child-custody" },
      { text: "Partage des biens", link: "/guide/asset-division" },
      { text: "Pension alimentaire", link: "/guide/alimony" }
    ]
  },
  {
    title: "Documents pratiques",
    description: "Guides et modèles pour vous accompagner",
    icon: FileText,
    items: [
      { text: "Modèle de convention", link: "/guide/convention" },
      { text: "Check-list des démarches", link: "/guide/checklistDemarche" },
      { text: "Guide de la séparation", link: "/guide/separationGuide" },
      { text: "Documents administratifs", link: "/guide/administrativeDocs" }
    ]
  },
  {
    title: "Accompagnement",
    description: "Un soutien professionnel à chaque étape",
    icon: Users,
    items: [
      { text: "Consultation juridique", link: "/guide/legal-consultation" },
      { text: "Médiation familiale", link: "/guide/family-mediation" },
      { text: "Soutien psychologique", link: "/guide/psychological-support" },
      { text: "Coaching personnel", link: "/guide/personal-coaching" }
    ]
  },
  {
    title: "Ressources",
    description: "Articles et conseils pour vous guider",
    icon: BookOpen,
    items: [
      { text: "Impact sur les enfants", link: "/guide/children-impact" },
      { text: "Gestion émotionnelle", link: "/guide/emotional-management" },
      { text: "Réorganisation pratique", link: "/guide/practical-reorganization" },
      { text: "Communication", link: "/guide/communication" }
    ]
  }
];

export default function Separation() {
  return (
    <div className="pt-16">
      <div className="bg-[#85C196] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-4">Préparer sa séparation</h1>
          <p className="text-xl text-center max-w-2xl mx-auto">
            Un accompagnement complet pour traverser cette étape sereinement
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resources.map((resource) => (
            <div key={resource.title} className="bg-white rounded-lg shadow-sm p-8 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-6">
                <resource.icon className="h-8 w-8 text-[#85C196]" />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold">{resource.title}</h3>
                  <p className="text-gray-600">{resource.description}</p>
                </div>
              </div>
              <ul className="space-y-3">
                {resource.items.map((item) => (
                  <li key={item.text}>
                    <Link
                      to={item.link}
                      className="flex items-center group"
                    >
                      <div className="h-2 w-2 bg-[#85C196] rounded-full mr-3"></div>
                      <span className="text-gray-700 group-hover:text-[#85C196] transition-colors">
                        {item.text}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}