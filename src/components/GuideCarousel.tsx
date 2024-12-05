import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PracticalGuide } from '../types/practicalGuide';

interface GuideCarouselProps {
  guides: PracticalGuide[];
  title: string;
  subtitle?: string;
}

export default function GuideCarousel({ guides, title, subtitle }: GuideCarouselProps) {
  const [startIndex, setStartIndex] = useState(0);
  const visibleGuides = 3;

  const showPrevious = () => {
    setStartIndex((prev) => Math.max(0, prev - 1));
  };

  const showNext = () => {
    setStartIndex((prev) => Math.min(guides.length - visibleGuides, prev + 1));
  };

  const canShowPrevious = startIndex > 0;
  const canShowNext = startIndex < guides.length - visibleGuides;

  if (!guides || guides.length === 0) {
    return null;
  }

  return (
    <div className="relative">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        {subtitle && (
          <p className="mt-2 text-gray-600">{subtitle}</p>
        )}
      </div>
      
      <div className="relative">
        {canShowPrevious && (
          <button
            onClick={showPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg z-10 hover:bg-gray-50"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
        )}

        <div className="flex space-x-6 overflow-hidden">
          {guides.slice(startIndex, startIndex + visibleGuides).map((guide) => (
            <Link 
              key={guide.id}
              to={`/guide/${guide.id}`}
              className="flex-none w-1/3 transform transition-transform duration-300 hover:scale-105"
            >
              <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-w-16 aspect-h-9 relative">
                  <img
                    src={guide.image}
                    alt={guide.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{guide.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{guide.description}</p>
                  <span className="text-[#85C196] hover:text-[#75b086] font-medium inline-flex items-center">
                    Lire le guide
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {canShowNext && (
          <button
            onClick={showNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg z-10 hover:bg-gray-50"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>
        )}
      </div>
      
      {guides.length > visibleGuides && (
        <div className="flex justify-center mt-6">
          <div className="flex space-x-2">
            {Array.from({ length: Math.ceil(guides.length / visibleGuides) }).map((_, idx) => (
              <button
                key={idx}
                className={`h-2 w-2 rounded-full transition-colors ${
                  Math.floor(startIndex / visibleGuides) === idx
                    ? 'bg-[#85C196]'
                    : 'bg-gray-300'
                }`}
                onClick={() => setStartIndex(idx * visibleGuides)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}