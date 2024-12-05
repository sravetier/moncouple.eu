import React, { useState } from 'react';
import { Plus, Edit2, Trash2, Save, X } from 'lucide-react';
import { tests } from '../../data/tests';
import { personalTests } from '../../data/personalTests';
import { rebuildTests } from '../../data/rebuildTests';
import QuestionEditor from './QuestionEditor';
import ImageUploader from '../../components/ImageUploader';

type TestCategory = 'couple' | 'personal' | 'rebuild';

interface TestFormData {
  id: string;
  title: string;
  description: string;
  image: string;
  category: TestCategory;
  questions?: any[];
}

export default function TestManager() {
  const [selectedCategory, setSelectedCategory] = useState<TestCategory>('couple');
  const [isEditing, setIsEditing] = useState(false);
  const [editingTest, setEditingTest] = useState<TestFormData | null>(null);
  const [showQuestionEditor, setShowQuestionEditor] = useState(false);

  const categories = {
    couple: { name: 'Tests de couple', data: tests },
    personal: { name: 'Tests personnels', data: personalTests },
    rebuild: { name: 'Tests de reconstruction', data: rebuildTests }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditingTest(null);
    setShowQuestionEditor(false);
  };

  const handleEdit = (test: any) => {
    setEditingTest({
      id: test.id,
      title: test.title,
      description: test.description,
      image: test.image,
      category: selectedCategory,
      questions: test.questions
    });
    setIsEditing(true);
  };

  const handleSave = () => {
    // Logique de sauvegarde
    handleCancel();
  };

  const handleDelete = (testId: string) => {
    // Logique de suppression
    console.log('Suppression du test:', testId);
  };

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-900">Gestion des tests</h1>
          <button
            onClick={() => {
              setIsEditing(true);
              setEditingTest({
                id: '',
                title: '',
                description: '',
                image: '',
                category: selectedCategory,
                questions: []
              });
            }}
            className="flex items-center px-4 py-2 bg-[#85C196] text-white rounded-md hover:bg-[#75b086]"
          >
            <Plus className="h-5 w-5 mr-2" />
            Nouveau test
          </button>
        </div>

        <div className="mt-8">
          <div className="flex space-x-4 mb-6">
            {Object.entries(categories).map(([key, { name }]) => (
              <button
                key={key}
                onClick={() => setSelectedCategory(key as TestCategory)}
                className={`px-4 py-2 rounded-md ${
                  selectedCategory === key
                    ? 'bg-[#85C196] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {name}
              </button>
            ))}
          </div>

          {showQuestionEditor ? (
            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Édition des questions</h2>
                <button
                  onClick={() => setShowQuestionEditor(false)}
                  className="p-2 text-gray-500 hover:text-gray-700"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <QuestionEditor
                initialQuestions={editingTest?.questions || []}
                onSave={(questions) => {
                  setEditingTest(prev => prev ? {...prev, questions} : null);
                  setShowQuestionEditor(false);
                }}
              />
            </div>
          ) : (
            <>
              {isEditing && (
                <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">
                      {editingTest?.id ? 'Modifier le test' : 'Nouveau test'}
                    </h2>
                    <button
                      onClick={handleCancel}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Titre</label>
                      <input
                        type="text"
                        value={editingTest?.title || ''}
                        onChange={(e) => setEditingTest(prev => prev ? {...prev, title: e.target.value} : null)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">Description</label>
                      <textarea
                        value={editingTest?.description || ''}
                        onChange={(e) => setEditingTest(prev => prev ? {...prev, description: e.target.value} : null)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                        rows={3}
                      />
                    </div>

                    <ImageUploader
                      currentImage={editingTest?.image}
                      onImageSelect={(imageUrl) => 
                        setEditingTest(prev => prev ? {...prev, image: imageUrl} : null)
                      }
                    />

                    <div className="flex justify-between">
                      <button
                        type="button"
                        onClick={() => setShowQuestionEditor(true)}
                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
                      >
                        {editingTest?.questions?.length ? 'Modifier les questions' : 'Ajouter des questions'}
                      </button>

                      <div className="flex space-x-4">
                        <button
                          onClick={handleCancel}
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
                </div>
              )}

              <div className="bg-white shadow-sm rounded-lg">
                <div className="grid grid-cols-1 gap-4 p-6">
                  {categories[selectedCategory].data.map((test) => (
                    <div
                      key={test.id}
                      className="flex items-center justify-between p-4 border rounded-lg hover:border-[#85C196] transition-colors"
                    >
                      <div className="flex items-center space-x-4">
                        <img
                          src={test.image}
                          alt={test.title}
                          className="w-16 h-16 object-cover rounded"
                        />
                        <div>
                          <h3 className="font-medium">{test.title}</h3>
                          <p className="text-sm text-gray-500">{test.description}</p>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleEdit(test)}
                          className="p-2 text-gray-600 hover:text-[#85C196]"
                        >
                          <Edit2 className="h-5 w-5" />
                        </button>
                        <button
                          onClick={() => handleDelete(test.id)}
                          className="p-2 text-gray-600 hover:text-red-500"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}