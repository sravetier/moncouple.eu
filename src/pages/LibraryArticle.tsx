import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Filter } from 'lucide-react';
import { ArticleCard } from '../components/ArticleCard';
import { articles } from '../data/articleGuide/indexArticle';
import type { Article } from '../types/article';
import { BookOpen } from 'lucide-react';  // Assurez-vous d'importer l'icône

const categories = [
  'Faire le point',
  'Se séparer',
  'Se reconstruire',
  'Sauver son couple'
] as const;

export function LibraryArticle() {
  
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredArticles = articles.filter(article => {
    const matchesCategory = !selectedCategory || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const articlesByCategory = filteredArticles.reduce((acc, article) => {
    if (!acc[article.category]) {
      acc[article.category] = [];
    }
    acc[article.category].push(article);
    return acc;
  }, {} as Record<Article['category'], Article[]>);

  const handleArticleClick = (id: string) => {
    navigate(`/article/${id}`);
  };

  return (
    <main className="flex-grow bg-gray-50">
      
      {/* Bandeau ajouté en haut de la page */}
      <div className="pt-16">
        <div className="bg-[#85C196] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center mb-8">
              <BookOpen className="h-16 w-16" />
            </div>
            <h1 className="text-4xl font-bold text-center mb-4">Tout nos articles</h1>
            <p className="text-xl text-center max-w-2xl mx-auto">
            Des témoignages et de l'inspiration
            </p>
          </div>
        </div>
      </div>

      {/* Contenu des articles */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">

          
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Rechercher un article..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex items-center gap-2">
              <Filter size={20} className="text-gray-500" />
              <select
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                value={selectedCategory || ''}
                onChange={(e) => setSelectedCategory(e.target.value || null)}
              >
                <option value="">Toutes les catégories</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {Object.entries(articlesByCategory).map(([category, categoryArticles]) => (
          <div key={category} className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 pb-2 border-b border-gray-200">
              {category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryArticles.map(article => (
                <ArticleCard
                  key={article.id}
                  article={article}
                  onClick={handleArticleClick}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
