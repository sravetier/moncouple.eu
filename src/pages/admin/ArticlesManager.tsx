import React, { useState } from 'react';
import { Plus, Edit2, Trash2, Save, X } from 'lucide-react';
import { useArticlesStore } from '../../store/articlesStore';
import { usePopularContentStore } from '../../store/popularContentStore';
import { Article } from '../../types/article';
import ImageUploader from '../../components/ImageUploader';

interface ArticleFormData extends Omit<Article, 'id'> {
  id?: string;
}

export default function ArticlesManager() {
  const { articles, addArticle, updateArticle, deleteArticle } = useArticlesStore();
  const { popularArticleIds, setPopularArticles } = usePopularContentStore();
  const [isEditing, setIsEditing] = useState(false);
  const [editingArticle, setEditingArticle] = useState<ArticleFormData | null>(null);

  const initialArticleData: ArticleFormData = {
    title: '',
    content: '',
    summary: '',
    image: '',
    author: '',
    category: '',
    publishedAt: new Date().toISOString()
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingArticle) return;

    if (editingArticle.id) {
      updateArticle({ ...editingArticle, id: editingArticle.id });
    } else {
      addArticle(editingArticle);
    }

    setIsEditing(false);
    setEditingArticle(null);
  };

  const handleDelete = (articleId: string) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cet article ?')) {
      deleteArticle(articleId);
      // Remove from popular articles if present
      if (popularArticleIds.includes(articleId)) {
        setPopularArticles(popularArticleIds.filter(id => id !== articleId));
      }
    }
  };

  const togglePopular = (articleId: string) => {
    const newPopularIds = popularArticleIds.includes(articleId)
      ? popularArticleIds.filter(id => id !== articleId)
      : [...popularArticleIds, articleId].slice(-3);
    setPopularArticles(newPopularIds);
  };

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-semibold text-gray-900">Gestion des articles</h1>
          <button
            onClick={() => {
              setIsEditing(true);
              setEditingArticle(initialArticleData);
            }}
            className="flex items-center px-4 py-2 bg-[#85C196] text-white rounded-md hover:bg-[#75b086]"
          >
            <Plus className="h-5 w-5 mr-2" />
            Nouvel article
          </button>
        </div>

        {isEditing && (
          <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">
                {editingArticle?.id ? 'Modifier l\'article' : 'Nouvel article'}
              </h2>
              <button
                onClick={() => {
                  setIsEditing(false);
                  setEditingArticle(null);
                }}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Titre</label>
                <input
                  type="text"
                  value={editingArticle?.title || ''}
                  onChange={(e) => setEditingArticle(prev => prev ? {...prev, title: e.target.value} : null)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Résumé</label>
                <textarea
                  value={editingArticle?.summary || ''}
                  onChange={(e) => setEditingArticle(prev => prev ? {...prev, summary: e.target.value} : null)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  rows={3}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Contenu</label>
                <textarea
                  value={editingArticle?.content || ''}
                  onChange={(e) => setEditingArticle(prev => prev ? {...prev, content: e.target.value} : null)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  rows={10}
                  required
                />
              </div>

              <ImageUploader
                currentImage={editingArticle?.image}
                onImageSelect={(imageUrl) => 
                  setEditingArticle(prev => prev ? {...prev, image: imageUrl} : null)
                }
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Auteur</label>
                  <input
                    type="text"
                    value={editingArticle?.author || ''}
                    onChange={(e) => setEditingArticle(prev => prev ? {...prev, author: e.target.value} : null)}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Catégorie</label>
                  <input
                    type="text"
                    value={editingArticle?.category || ''}
                    onChange={(e) => setEditingArticle(prev => prev ? {...prev, category: e.target.value} : null)}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    required
                  />
                </div>
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => {
                    setIsEditing(false);
                    setEditingArticle(null);
                  }}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#85C196] text-white rounded-md hover:bg-[#75b086] flex items-center"
                >
                  <Save className="h-5 w-5 mr-2" />
                  Enregistrer
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="bg-white shadow-sm rounded-lg">
          <div className="grid grid-cols-1 gap-4 p-6">
            {articles.map((article) => (
              <div
                key={article.id}
                className="flex items-center justify-between p-4 border rounded-lg hover:border-[#85C196] transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h3 className="font-medium">{article.title}</h3>
                    <p className="text-sm text-gray-500">{article.summary}</p>
                    <div className="flex items-center mt-1 text-xs text-gray-400">
                      <span>{article.author}</span>
                      <span className="mx-2">•</span>
                      <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
                      <span className="mx-2">•</span>
                      <span>{article.category}</span>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => togglePopular(article.id)}
                    className={`px-3 py-1 text-sm rounded-full ${
                      popularArticleIds.includes(article.id)
                        ? 'bg-[#85C196] text-white'
                        : 'border border-gray-300 text-gray-700 hover:border-[#85C196]'
                    }`}
                  >
                    {popularArticleIds.includes(article.id) ? 'Populaire' : 'Marquer populaire'}
                  </button>
                  <button
                    onClick={() => {
                      setEditingArticle(article);
                      setIsEditing(true);
                    }}
                    className="p-2 text-gray-600 hover:text-[#85C196]"
                  >
                    <Edit2 className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => handleDelete(article.id)}
                    className="p-2 text-gray-600 hover:text-red-500"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}