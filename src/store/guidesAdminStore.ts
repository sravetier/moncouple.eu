import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { PracticalGuide } from '../types/practicalGuide';
import { practicalGuides } from '../data/practicalGuides';

interface GuidesAdminState {
  guides: PracticalGuide[];
  addGuide: (guide: PracticalGuide) => void;
  updateGuide: (guide: PracticalGuide) => void;
  deleteGuide: (guideId: string) => void;
  getAllGuides: () => PracticalGuide[];
}

export const useGuidesAdminStore = create<GuidesAdminState>()(
  persist(
    (set, get) => ({
      guides: practicalGuides,
      addGuide: (guide) => set((state) => ({
        guides: [...state.guides, guide]
      })),
      updateGuide: (updatedGuide) => set((state) => ({
        guides: state.guides.map((guide) => 
          guide.id === updatedGuide.id ? updatedGuide : guide
        )
      })),
      deleteGuide: (guideId) => set((state) => ({
        guides: state.guides.filter((guide) => guide.id !== guideId)
      })),
      getAllGuides: () => get().guides
    }),
    {
      name: 'guides-admin-storage'
    }
  )
);