import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, CheckCircle } from 'lucide-react';
import { practicalGuides } from '../data/practicalGuides';

export default function PracticalGuidePage() {
  const { guideId } = useParams();
  const navigate = useNavigate();
  
  const guide = practicalGuides.find(g => g.id === guideId);

  if (!guide) {
    return (
      <div className="min-h-screen pt-16 bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-900">Guide non trouvé</h2>
          <button
            onClick={() => navigate(-1)}
            className="mt-4 text-[#85C196] hover:text-[#75b086] flex items-center justify-center"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Retour
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-[#85C196] mb-8"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Retour
        </button>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <img
            src={guide.image}
            alt={guide.title}
            className="w-full h-64 object-cover"
          />
          
          <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">{guide.title}</h1>
            <p className="text-gray-600 mb-8">{guide.description}</p>

            {guide.sections.map((section, index) => (
              <div key={index} className="mb-12">
                <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                  {section.title}
                </h2>
                
                {section.content.map((content, contentIndex) => (
                  <div key={contentIndex} className="mb-8 bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-4 text-gray-700">
                      {content.subtitle}
                    </h3>
                    
                    {content.points && (
                      <ul className="space-y-3 mb-6">
                        {content.points.map((point, pointIndex) => (
                          <li key={pointIndex} className="flex items-start">
                            <div className="h-2 w-2 bg-[#85C196] rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span className="text-gray-600">{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {content.checklistItems && (
                      <ul className="space-y-3">
                        {content.checklistItems.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-[#85C196] mr-3 flex-shrink-0" />
                            <span className="text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            ))}

            {guide.resources && guide.resources.length > 0 && (
              <div className="border-t pt-8">
                <h2 className="text-2xl font-semibold mb-6">Ressources complémentaires</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {guide.resources.map((resource, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-6">
                      <h3 className="text-xl font-medium mb-4 text-gray-700">
                        {resource.title}
                      </h3>
                      <ul className="space-y-3">
                        {resource.links.map((link, linkIndex) => (
                          <li key={linkIndex}>
                            <a
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center text-[#85C196] hover:text-[#75b086] group"
                            >
                              <ExternalLink className="h-4 w-4 mr-2 transition-transform group-hover:translate-x-1" />
                              <span className="underline">{link.text}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}