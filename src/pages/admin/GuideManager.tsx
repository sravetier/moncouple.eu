import React, { useState } from 'react';
import { Plus, Edit2, Trash2, Save, X } from 'lucide-react';
import { practicalGuides } from '../../data/practicalGuides/index';
import { PracticalGuide } from '../../types/practicalGuide';
import ImageUploader from '../../components/ImageUploader';
import SectionEditor from '../../components/SectionEditor';

interface GuideFormData extends PracticalGuide {
  isNew?: boolean;
}

export default function GuideManager() {
  const [isAddingGuide, setIsAddingGuide] = useState(false);
  const [editingGuide, setEditingGuide] = useState<GuideFormData | null>(null);
  const [showSectionEditor, setShowSectionEditor] = useState(false);

  const initialGuideData: GuideFormData = {
    id: '',
    title: '',
    description: '',
    image: '',
    category: 'rebuild',
    sections: [],
    resources: [],
    isNew: true
  };

  const categories = [
    { value: 'separation', label: 'Préparer sa séparation' },
    { value: 'rebuild', label: 'Se reconstruire' },
    { value: 'save-relationship', label: 'Sauver son couple' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique de sauvegarde
    setIsAddingGuide(false);
    setEditingGuide(null);
    setShowSectionEditor(false);
  };

  const handleCancel = () => {
    setIsAddingGuide(false);
    setEditingGuide(null);
    setShowSectionEditor(false);
  };

  const handleEdit = (guide: PracticalGuide) => {
    setEditingGuide({ ...guide, isNew: false });
  };

  const handleDelete = (guideId: string) => {
    // Logique de suppression
    console.log('Suppression du guide:', guideId);
  };

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-900">Gestion des guides pratiques</h1>
          <button
            onClick={() => {
              setIsAddingGuide(true);
              setEditingGuide(initialGuideData);
            }}
            className="flex items-center px-4 py-2 bg-[#85C196] text-white rounded-md hover:bg-[#75b086]"
          >
            <Plus className="h-5 w-5 mr-2" />
            Nouveau guide
          </button>
        </div>

        <div className="mt-8">
          {(isAddingGuide || editingGuide) && (
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">
                  {editingGuide?.isNew ? 'Nouveau guide' : 'Modifier le guide'}
                </h2>
                <button
                  onClick={handleCancel}
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
                    value={editingGuide?.title || ''}
                    onChange={(e) => setEditingGuide(prev => prev ? {...prev, title: e.target.value} : null)}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Description</label>
                  <textarea
                    value={editingGuide?.description || ''}
                    onChange={(e) => setEditingGuide(prev => prev ? {...prev, description: e.target.value} : null)}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    rows={3}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Catégorie</label>
                  <select
                    value={editingGuide?.category || 'rebuild'}
                    onChange={(e) => setEditingGuide(prev => prev ? {...prev, category: e.target.value as PracticalGuide['category']} : null)}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    required
                  >
                    {categories.map(category => (
                      <option key={category.value} value={category.value}>
                        {category.label}
                      </option>
                    ))}
                  </select>
                </div>

                <ImageUploader
                  currentImage={editingGuide?.image}
                  onImageSelect={(imageUrl) => 
                    setEditingGuide(prev => prev ? {...prev, image: imageUrl} : null)
                  }
                />

                <div className="border-t pt-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Sections</h3>
                  <SectionEditor
                    sections={editingGuide?.sections || []}
                    onUpdate={(sections) => 
                      setEditingGuide(prev => prev ? {...prev, sections} : null)
                    }
                  />
                </div>

                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={handleCancel}
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
              {practicalGuides.map((guide) => (
                <div
                  key={guide.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:border-[#85C196] transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={guide.image}
                      alt={guide.title}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <h3 className="font-medium">{guide.title}</h3>
                      <p className="text-sm text-gray-500">{guide.description}</p>
                      <p className="text-xs text-gray-400 mt-1">
                        Catégorie : {categories.find(c => c.value === guide.category)?.label}
                      </p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEdit(guide)}
                      className="p-2 text-gray-600 hover:text-[#85C196]"
                    >
                      <Edit2 className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => handleDelete(guide.id)}
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
    </div>
  );
}