import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Test {
  id: string;
  title: string;
  image: string;
  description: string;
}

interface TestCarouselProps {
  tests: Test[];
  title: string;
  subtitle?: string;
}

export default function TestCarousel({ tests, title, subtitle }: TestCarouselProps) {
  const [startIndex, setStartIndex] = useState(0);
  const visibleTests = 3;

  const showPrevious = () => {
    setStartIndex((prev) => Math.max(0, prev - 1));
  };

  const showNext = () => {
    setStartIndex((prev) => Math.min(tests.length - visibleTests, prev + 1));
  };

  const canShowPrevious = startIndex > 0;
  const canShowNext = startIndex < tests.length - visibleTests;

  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        {subtitle && (
          <p className="mt-2 text-gray-600">{subtitle}</p>
        )}
      </div>
      
      <div className="relative">
        <button
          onClick={showPrevious}
          className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg z-10 transition-opacity ${
            !canShowPrevious ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'
          }`}
          disabled={!canShowPrevious}
        >
          <ChevronLeft className="h-6 w-6 text-gray-600" />
        </button>

        <div className="flex space-x-6 overflow-hidden">
          {tests.slice(startIndex, startIndex + visibleTests).map((test) => (
            <Link 
              key={test.id}
              to={`/test/${test.id}`}
              className="flex-none w-1/3 transform transition-transform duration-300 hover:scale-105"
            >
              <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-w-16 aspect-h-9 relative">
                  <img
                    src={test.image}
                    alt={test.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{test.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{test.description}</p>
                  <span className="text-[#85C196] hover:text-[#75b086] font-medium inline-flex items-center">
                    Commencer le test
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <button
          onClick={showNext}
          className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg z-10 transition-opacity ${
            !canShowNext ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'
          }`}
          disabled={!canShowNext}
        >
          <ChevronRight className="h-6 w-6 text-gray-600" />
        </button>
      </div>
      
      <div className="flex justify-center mt-6">
        <div className="flex space-x-2">
          {Array.from({ length: Math.ceil(tests.length / visibleTests) }).map((_, idx) => (
            <button
              key={idx}
              className={`h-2 w-2 rounded-full transition-colors ${
                Math.floor(startIndex / visibleTests) === idx
                  ? 'bg-[#85C196]'
                  : 'bg-gray-300'
              }`}
              onClick={() => setStartIndex(idx * visibleTests)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}