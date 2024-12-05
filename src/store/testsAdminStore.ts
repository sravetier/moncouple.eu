import { create } from 'zustand';
import { Test } from '../types/test';
import { tests, addTest as addTestToData, updateTest as updateTestData, deleteTest as deleteTestData } from '../data/tests';

interface TestsAdminState {
  tests: Test[];
  loading: boolean;
  error: string | null;
  addTest: (test: Omit<Test, 'id'>) => void;
  updateTest: (test: Test) => void;
  deleteTest: (testId: string) => void;
  getAllTests: () => Test[];
}

export const useTestsAdminStore = create<TestsAdminState>()((set, get) => ({
  tests: tests,
  loading: false,
  error: null,
  
  addTest: (testData) => {
    const newTest: Test = {
      id: `test-${Date.now()}`,
      ...testData
    };
    addTestToData(newTest);
    set({ tests: [...get().tests, newTest] });
  },
  
  updateTest: (updatedTest) => {
    updateTestData(updatedTest);
    set({ tests: get().tests.map(test => test.id === updatedTest.id ? updatedTest : test) });
  },
  
  deleteTest: (testId) => {
    deleteTestData(testId);
    set({ tests: get().tests.filter(test => test.id !== testId) });
  },
  
  getAllTests: () => get().tests
}));