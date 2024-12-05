import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { TestResult } from '../types/test';

interface TestStore {
  results: TestResult[];
  addResult: (result: TestResult) => void;
  getResultsByTestId: (testId: string) => TestResult[];
}

export const useTestStore = create<TestStore>()(
  persist(
    (set, get) => ({
      results: [],
      addResult: (result) => set((state) => ({
        results: [...state.results, result]
      })),
      getResultsByTestId: (testId) => get().results.filter(r => r.testId === testId)
    }),
    {
      name: 'test-results'
    }
  )
);