import React, { useState } from 'react';
import { Plus, Trash2, ChevronDown, ChevronUp } from 'lucide-react';
import { Section, ContentSection } from '../types/practicalGuide';

interface SectionEditorProps {
  sections: Section[];
  onUpdate: (sections: Section[]) => void;
}

export default function SectionEditor({ sections, onUpdate }: SectionEditorProps) {
  const [expandedSections, setExpandedSections] = useState<number[]>([]);

  const toggleSection = (index: number) => {
    setExpandedSections(prev => 
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const addSection = () => {
    const newSections = [...sections, { title: '', content: [] }];
    onUpdate(newSections);
    // Automatiquement expandre la nouvelle section
    setExpandedSections(prev => [...prev, sections.length]);
  };

  const updateSection = (index: number, updatedSection: Section) => {
    const newSections = [...sections];
    newSections[index] = updatedSection;
    onUpdate(newSections);
  };

  const removeSection = (index: number) => {
    onUpdate(sections.filter((_, idx) => idx !== index));
    setExpandedSections(prev => prev.filter(i => i !== index));
  };

  const addContent = (sectionIndex: number) => {
    const newSections = [...sections];
    newSections[sectionIndex].content.push({
      subtitle: '',
      points: [],
      checklistItems: []
    });
    onUpdate(newSections);
  };

  const updateContent = (sectionIndex: number, contentIndex: number, field: keyof ContentSection, value: string | string[]) => {
    const newSections = [...sections];
    const content = { ...newSections[sectionIndex].content[contentIndex] };

    if (field === 'points' || field === 'checklistItems') {
      content[field] = (value as string).split('\n').filter(item => item.trim());
    } else {
      content[field] = value as string;
    }

    newSections[sectionIndex].content[contentIndex] = content;
    onUpdate(newSections);
  };

  const removeContent = (sectionIndex: number, contentIndex: number) => {
    const newSections = [...sections];
    newSections[sectionIndex].content = newSections[sectionIndex].content.filter((_, idx) => idx !== contentIndex);
    onUpdate(newSections);
  };

  return (
    <div className="space-y-4">
      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="border rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <input
              type="text"
              value={section.title}
              onChange={(e) => updateSection(sectionIndex, { ...section, title: e.target.value })}
              className="flex-1 text-lg font-medium border-b border-gray-300 focus:border-[#85C196] focus:outline-none"
              placeholder="Titre de la section"
            />
            <div className="flex items-center space-x-2">
              <button
                type="button"
                onClick={() => toggleSection(sectionIndex)}
                className="p-2 text-gray-500 hover:text-gray-700"
              >
                {expandedSections.includes(sectionIndex) ? (
                  <ChevronUp className="h-5 w-5" />
                ) : (
                  <ChevronDown className="h-5 w-5" />
                )}
              </button>
              <button
                type="button"
                onClick={() => removeSection(sectionIndex)}
                className="p-2 text-red-500 hover:text-red-700"
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
          </div>

          {expandedSections.includes(sectionIndex) && (
            <div className="space-y-4">
              {section.content.map((content, contentIndex) => (
                <div key={contentIndex} className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between items-start mb-4">
                    <input
                      type="text"
                      value={content.subtitle}
                      onChange={(e) => updateContent(sectionIndex, contentIndex, 'subtitle', e.target.value)}
                      className="flex-1 border-b border-gray-300 focus:border-[#85C196] focus:outline-none"
                      placeholder="Sous-titre"
                    />
                    <button
                      type="button"
                      onClick={() => removeContent(sectionIndex, contentIndex)}
                      className="p-1 text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Points (un par ligne)
                      </label>
                      <textarea
                        value={content.points?.join('\n') || ''}
                        onChange={(e) => updateContent(sectionIndex, contentIndex, 'points', e.target.value)}
                        className="w-full border border-gray-300 rounded-md p-2 focus:border-[#85C196] focus:outline-none"
                        rows={4}
                        placeholder="Entrez vos points ici..."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Liste de contrôle (un par ligne)
                      </label>
                      <textarea
                        value={content.checklistItems?.join('\n') || ''}
                        onChange={(e) => updateContent(sectionIndex, contentIndex, 'checklistItems', e.target.value)}
                        className="w-full border border-gray-300 rounded-md p-2 focus:border-[#85C196] focus:outline-none"
                        rows={4}
                        placeholder="Entrez vos éléments de liste ici..."
                      />
                    </div>
                  </div>
                </div>
              ))}

              <button
                type="button"
                onClick={() => addContent(sectionIndex)}
                className="w-full py-2 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-[#85C196] hover:text-[#85C196]"
              >
                <Plus className="h-4 w-4 inline-block mr-2" />
                Ajouter un contenu
              </button>
            </div>
          )}
        </div>
      ))}

      <button
        type="button"
        onClick={addSection}
        className="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-[#85C196] hover:text-[#85C196]"
      >
        <Plus className="h-5 w-5 inline-block mr-2" />
        Ajouter une section
      </button>
    </div>
  );
}