import React from 'react';
import { ExternalLink } from 'lucide-react';

interface Resource {
  id: string;
  title: string;
  description: string;
  category: string;
  url: string;
}

interface ExternalResourcesProps {
  resources: Resource[];
}

export default function ExternalResources({ resources }: ExternalResourcesProps) {
  const categories = Array.from(new Set(resources.map(r => r.category)));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-50">
      <h2 className="text-2xl font-bold mb-8">Sites spécialisés</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((category) => (
          <div key={category} className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-semibold mb-4">{category}</h3>
            <div className="space-y-4">
              {resources
                .filter(r => r.category === category)
                .map((resource) => (
                  <a
                    key={resource.id}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 border border-gray-100 rounded-lg hover:border-[#85C196] transition-colors"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-medium text-gray-900">{resource.title}</h4>
                        <p className="text-sm text-gray-600 mt-1">{resource.description}</p>
                      </div>
                      <ExternalLink className="h-5 w-5 text-[#85C196] flex-shrink-0" />
                    </div>
                  </a>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}