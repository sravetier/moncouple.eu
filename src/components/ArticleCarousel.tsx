import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Article {
  id: string;
  title: string;
  image: string;
  description: string;
}

interface ArticleCarouselProps {
  articles: Article[];
}

export default function ArticleCarousel({ articles }: ArticleCarouselProps) {
  const [startIndex, setStartIndex] = useState(0);

  const showPrevious = () => {
    setStartIndex(Math.max(0, startIndex - 1));
  };

  const showNext = () => {
    setStartIndex(Math.max(0, Math.min(articles.length - 3, startIndex + 1)));
  };

  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-gray-50">
      <h2 className="text-2xl font-bold mb-6">Articles conseils</h2>
      <div className="relative">
        <button
          onClick={showPrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg z-10 hover:bg-gray-50"
          disabled={startIndex === 0}
        >
          <ChevronLeft className="h-6 w-6 text-gray-600" />
        </button>

        <div className="flex space-x-6 overflow-hidden">
          {articles.slice(startIndex, startIndex + 3).map((article) => (
            <div key={article.id} className="flex-none w-1/3">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{article.title}</h3>
                  <p className="text-gray-600 text-sm">{article.description}</p>
                  <button className="mt-4 text-[#85C196] hover:text-[#75b086] font-medium">
                    Lire l'article →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={showNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg z-10 hover:bg-gray-50"
          disabled={startIndex >= articles.length - 3}
        >
          <ChevronRight className="h-6 w-6 text-gray-600" />
        </button>
      </div>
    </div>
  );
}