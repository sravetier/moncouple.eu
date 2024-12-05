import React from 'react';
import { useParams } from 'react-router-dom';
import { findArticleById } from '../data/articleGuide/indexArticle';
import { parseArticleContent } from '../utils/articleContentParser';

export function ArticleGuidePage() {
  const { articleId } = useParams();
  const article = findArticleById(articleId || '');

  if (!article) {
    return (
      <main className="flex-grow bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Article non trouvé</h1>
          <p className="text-gray-600 mt-2">L'article que vous recherchez n'existe pas.</p>
        </div>
      </main>
    );
  }

  const content = parseArticleContent(article.content);

  return (
    <main className="flex-grow bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-4">
          <span className="inline-block px-3 py-1 bg-rose-600 text-white text-sm rounded-full">
            {article.category}
          </span>
        </div>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-8">{article.title}</h1>
        
        {/* Premier bloc : Image à gauche, texte à droite */}
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="md:w-2/5">
            <img
              src={article.images[0]}
              alt={article.title}
              className="w-full h-52 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-3/5 flex flex-col justify-center">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700">{content.intro}</p>
            </div>
          </div>
        </div>

        {/* Deuxième bloc : Points clés */}
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <div className="bg-rose-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-rose-800 mb-3">Points clés</h3>
              <div className="prose prose-base">
                {content.keyPoints.sections.map((section, index) => (
                  <div key={index} className="mb-2">
                    <h4 className="text-base font-semibold text-gray-800 mb-1">{section.title}</h4>
                    <p className="text-sm text-gray-700">{section.content}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">À retenir</h3>
              <blockquote className="text-sm italic text-gray-600 border-l-4 border-rose-500 pl-3">
                {content.quote}
              </blockquote>
            </div>
          </div>
        </div>

        {/* Troisième bloc : Image à droite, texte à gauche */}
        <div className="flex flex-col md:flex-row-reverse gap-8 mb-12">
          <div className="md:w-2/5">
            <img
              src={article.images[1]}
              alt={`${article.title} - illustration supplémentaire`}
              className="w-full h-44 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-3/5 flex flex-col justify-center">
            <div className="prose prose-lg max-w-none">
              {content.imageSection.sections.map((section, index) => (
                <div key={index} className="mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-3">{section.title}</h3>
                  <p className="text-gray-700">{section.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quatrième bloc : Contenu principal */}
        <div className="flex flex-col gap-8 mb-12">
          <div className="prose prose-lg max-w-none">
            
            {content.mainContent.sections.map((section, index) => (
              <div key={index} className="mb-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-3">{section.title}</h4>
                <p className="text-gray-700">{section.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Cinquième bloc : Conclusion */}
        <div className="flex flex-col gap-8">
          <div className="prose prose-lg max-w-none">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">En conclusion</h3>
            {content.conclusion.sections.map((section, index) => (
              <div key={index} className="mb-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-3">{section.title}</h4>
                <p className="text-gray-700">{section.content}</p>
              </div>
            ))}
            {content.conclusion.plainContent && (
              <p className="text-gray-700">{content.conclusion.plainContent}</p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}