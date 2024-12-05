import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PracticalGuide } from '../types/practicalGuide';

interface GuideGridProps {
  guides: PracticalGuide[];
  title: string;
  subtitle?: string;
}

export default function GuideGrid({ guides, title, subtitle }: GuideGridProps) {
  if (!guides || guides.length === 0) {
    return null;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      {subtitle && (
        <p className="text-gray-600 mb-8">{subtitle}</p>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {guides.map((guide) => (
          <Link
            key={guide.id}
            to={`/guide/${guide.id}`}
            className="group"
          >
            <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={guide.image}
                  alt={guide.title}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-200"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-[#85C196] transition-colors">
                  {guide.title}
                </h3>
                <p className="text-gray-600 mb-4">{guide.description}</p>
                <div className="flex items-center text-[#85C196] font-medium">
                  <span>Lire le guide</span>
                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}