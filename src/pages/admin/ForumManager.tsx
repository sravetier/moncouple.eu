import React, { useState } from 'react';
import { MessageSquare, Edit2, Trash2, Plus, Save, X, AlertCircle } from 'lucide-react';

interface ForumCategory {
  id: string;
  name: string;
  description: string;
  topics: number;
  messages: number;
  lastActivity: string;
  isLocked?: boolean;
}

interface Topic {
  id: string;
  title: string;
  author: string;
  category: string;
  replies: number;
  views: number;
  status: 'active' | 'locked' | 'archived';
  createdAt: string;
  lastActivity: string;
}

export default function ForumManager() {
  const [selectedTab, setSelectedTab] = useState<'categories' | 'topics' | 'reported'>('categories');
  const [isEditing, setIsEditing] = useState(false);
  const [editingItem, setEditingItem] = useState<ForumCategory | null>(null);

  // Données de démonstration
  const categories: ForumCategory[] = [
    {
      id: '1',
      name: 'Communication',
      description: 'Discussions sur la communication dans le couple',
      topics: 156,
      messages: 1243,
      lastActivity: 'Il y a 5 min'
    },
    {
      id: '2',
      name: 'Séparation & Divorce',
      description: 'Support et conseils pour les séparations',
      topics: 98,
      messages: 876,
      lastActivity: 'Il y a 15 min'
    }
  ];

  const topics: Topic[] = [
    {
      id: '1',
      title: 'Comment améliorer la communication ?',
      author: 'Marie D.',
      category: 'Communication',
      replies: 23,
      views: 456,
      status: 'active',
      createdAt: '2024-03-15',
      lastActivity: 'Il y a 1 heure'
    },
    {
      id: '2',
      title: 'Préparation au divorce',
      author: 'Thomas R.',
      category: 'Séparation & Divorce',
      replies: 15,
      views: 234,
      status: 'active',
      createdAt: '2024-03-14',
      lastActivity: 'Il y a 3 heures'
    }
  ];

  const reportedMessages = [
    {
      id: '1',
      content: 'Message inapproprié...',
      author: 'User123',
      topic: 'Comment améliorer la communication ?',
      reportedBy: 'User456',
      reportReason: 'Contenu inapproprié',
      date: '2024-03-15'
    }
  ];

  const handleSave = () => {
    // Logique de sauvegarde
    setIsEditing(false);
    setEditingItem(null);
  };

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-semibold text-gray-900">Gestion du forum</h1>
          {selectedTab === 'categories' && (
            <button
              onClick={() => {
                setIsEditing(true);
                setEditingItem({
                  id: '',
                  name: '',
                  description: '',
                  topics: 0,
                  messages: 0,
                  lastActivity: ''
                });
              }}
              className="flex items-center px-4 py-2 bg-[#85C196] text-white rounded-md hover:bg-[#75b086]"
            >
              <Plus className="h-5 w-5 mr-2" />
              Nouvelle catégorie
            </button>
          )}
        </div>

        <div className="mb-8">
          <div className="flex space-x-4 border-b border-gray-200">
            <button
              onClick={() => setSelectedTab('categories')}
              className={`py-4 px-6 ${
                selectedTab === 'categories'
                  ? 'border-b-2 border-[#85C196] text-[#85C196]'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Catégories
            </button>
            <button
              onClick={() => setSelectedTab('topics')}
              className={`py-4 px-6 ${
                selectedTab === 'topics'
                  ? 'border-b-2 border-[#85C196] text-[#85C196]'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Sujets
            </button>
            <button
              onClick={() => setSelectedTab('reported')}
              className={`py-4 px-6 flex items-center ${
                selectedTab === 'reported'
                  ? 'border-b-2 border-[#85C196] text-[#85C196]'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Messages signalés
              <span className="ml-2 bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs">
                {reportedMessages.length}
              </span>
            </button>
          </div>
        </div>

        {isEditing && selectedTab === 'categories' && (
          <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">
                {editingItem?.id ? 'Modifier la catégorie' : 'Nouvelle catégorie'}
              </h2>
              <button
                onClick={() => {
                  setIsEditing(false);
                  setEditingItem(null);
                }}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Nom</label>
                <input
                  type="text"
                  value={editingItem?.name || ''}
                  onChange={(e) => setEditingItem(prev => prev ? {...prev, name: e.target.value} : null)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  value={editingItem?.description || ''}
                  onChange={(e) => setEditingItem(prev => prev ? {...prev, description: e.target.value} : null)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  rows={3}
                />
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => {
                    setIsEditing(false);
                    setEditingItem(null);
                  }}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Annuler
                </button>
                <button
                  onClick={handleSave}
                  className="px-4 py-2 bg-[#85C196] text-white rounded-md hover:bg-[#75b086] flex items-center"
                >
                  <Save className="h-5 w-5 mr-2" />
                  Enregistrer
                </button>
              </div>
            </div>
          </div>
        )}

        {selectedTab === 'categories' && (
          <div className="bg-white shadow-sm rounded-lg">
            <div className="grid grid-cols-1 gap-4 p-6">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:border-[#85C196] transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <MessageSquare className="h-8 w-8 text-[#85C196]" />
                    <div>
                      <h3 className="font-medium">{category.name}</h3>
                      <p className="text-sm text-gray-500">{category.description}</p>
                      <div className="flex space-x-4 mt-2 text-sm text-gray-500">
                        <span>{category.topics} sujets</span>
                        <span>{category.messages} messages</span>
                        <span>Dernière activité : {category.lastActivity}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => {
                        setIsEditing(true);
                        setEditingItem(category);
                      }}
                      className="p-2 text-gray-600 hover:text-[#85C196]"
                    >
                      <Edit2 className="h-5 w-5" />
                    </button>
                    <button className="p-2 text-gray-600 hover:text-red-500">
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedTab === 'topics' && (
          <div className="bg-white shadow-sm rounded-lg">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Sujet
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Catégorie
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Auteur
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Réponses
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Vues
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Statut
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {topics.map((topic) => (
                    <tr key={topic.id}>
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-gray-900">{topic.title}</div>
                        <div className="text-sm text-gray-500">Créé le {topic.createdAt}</div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">{topic.category}</td>
                      <td className="px-6 py-4 text-sm text-gray-500">{topic.author}</td>
                      <td className="px-6 py-4 text-sm text-gray-500">{topic.replies}</td>
                      <td className="px-6 py-4 text-sm text-gray-500">{topic.views}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          topic.status === 'active'
                            ? 'bg-green-100 text-green-800'
                            : topic.status === 'locked'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {topic.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex space-x-2">
                          <button className="text-gray-600 hover:text-[#85C196]">
                            <Edit2 className="h-5 w-5" />
                          </button>
                          <button className="text-gray-600 hover:text-red-500">
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {selectedTab === 'reported' && (
          <div className="bg-white shadow-sm rounded-lg">
            <div className="grid grid-cols-1 gap-4 p-6">
              {reportedMessages.map((message) => (
                <div
                  key={message.id}
                  className="border rounded-lg p-4 hover:border-red-500 transition-colors"
                >
                  <div className="flex items-start space-x-4">
                    <AlertCircle className="h-6 w-6 text-red-500 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="font-medium">Signalement dans : {message.topic}</h3>
                          <p className="text-sm text-gray-500">
                            Par {message.author} • Signalé par {message.reportedBy}
                          </p>
                        </div>
                        <span className="text-sm text-gray-500">{message.date}</span>
                      </div>
                      <div className="mt-2">
                        <p className="text-sm text-gray-600">{message.content}</p>
                      </div>
                      <div className="mt-2 p-2 bg-red-50 rounded">
                        <p className="text-sm text-red-600">
                          <span className="font-medium">Raison du signalement :</span> {message.reportReason}
                        </p>
                      </div>
                      <div className="mt-4 flex justify-end space-x-4">
                        <button className="px-3 py-1 text-sm border border-gray-300 rounded text-gray-700 hover:bg-gray-50">
                          Ignorer
                        </button>
                        <button className="px-3 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-700">
                          Supprimer le message
                        </button>
                        <button className="px-3 py-1 text-sm bg-yellow-500 text-white rounded hover:bg-yellow-600">
                          Avertir l'utilisateur
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}