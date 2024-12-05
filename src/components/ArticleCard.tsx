import React from 'react';
import type { Article } from '../types/article';

interface ArticleCardProps {
  article: Article;
  onClick: (id: string) => void;
}

export function ArticleCard({ article, onClick }: ArticleCardProps) {
  return (
    <div 
        className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform hover:scale-105 max-w-[75%] mx-auto"
        onClick={() => onClick(article.id)}
    >
      <div className="relative h-48">
        <img
          src={article.coverImage}
          alt={article.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {article.title}
        </h3>
        <p className="text-gray-600 text-sm">
          {article.excerpt}
        </p>
      </div>
    </div>
  );
}