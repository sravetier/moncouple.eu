import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { GuideCategory, GuideSubcategory } from '../types/guide';

interface GuideCategoriesState {
  subcategories: GuideSubcategory[];
  addSubcategory: (subcategory: Omit<GuideSubcategory, 'id'>) => void;
  updateSubcategory: (subcategory: GuideSubcategory) => void;
  deleteSubcategory: (subcategoryId: string) => void;
  getSubcategoriesByCategory: (category: GuideCategory) => GuideSubcategory[];
}

const initialSubcategories: GuideSubcategory[] = [
  // Séparation
  { id: 'legal', name: 'Aspects juridiques', category: 'separation' },
  { id: 'children', name: 'Enfants', category: 'separation' },
  { id: 'financial', name: 'Aspects financiers', category: 'separation' },
  { id: 'emotional', name: 'Soutien émotionnel', category: 'separation' },
  
  // Reconstruction
  { id: 'self-care', name: 'Prendre soin de soi', category: 'rebuild' },
  { id: 'healing', name: 'Guérison émotionnelle', category: 'rebuild' },
  { id: 'future', name: 'Se projeter', category: 'rebuild' },
  
  // Sauver son couple
  { id: 'communication', name: 'Communication', category: 'save-relationship' },
  { id: 'intimacy', name: 'Intimité', category: 'save-relationship' },
  { id: 'trust', name: 'Confiance', category: 'save-relationship' },
  { id: 'conflict', name: 'Gestion des conflits', category: 'save-relationship' },
  { id: 'growth', name: 'Développement personnel', category: 'save-relationship' }
];

export const useGuideCategoriesStore = create<GuideCategoriesState>()(
  persist(
    (set, get) => ({
      subcategories: initialSubcategories,
      
      addSubcategory: (subcategoryData) => {
        const newSubcategory = {
          id: `subcategory-${Date.now()}`,
          ...subcategoryData
        };
        set((state) => ({
          subcategories: [...state.subcategories, newSubcategory]
        }));
      },
      
      updateSubcategory: (updatedSubcategory) => set((state) => ({
        subcategories: state.subcategories.map((subcategory) => 
          subcategory.id === updatedSubcategory.id ? updatedSubcategory : subcategory
        )
      })),
      
      deleteSubcategory: (subcategoryId) => set((state) => ({
        subcategories: state.subcategories.filter((subcategory) => subcategory.id !== subcategoryId)
      })),
      
      getSubcategoriesByCategory: (category) => 
        get().subcategories.filter((subcategory) => subcategory.category === category)
    }),
    {
      name: 'guide-categories-storage'
    }
  )
);