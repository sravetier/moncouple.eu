import api from './api';
import { Test } from '../types/test';

export const testService = {
  async getAllTests(): Promise<Test[]> {
    try {
      const { data } = await api.get('/tests');
      return data;
    } catch (error) {
      console.error('Error in getAllTests:', error);
      throw error;
    }
  },

  async createTest(test: Omit<Test, 'id'>): Promise<Test> {
    try {
      const { data } = await api.post('/tests', test);
      return data;
    } catch (error) {
      console.error('Error in createTest:', error);
      throw error;
    }
  },

  async updateTest(test: Test): Promise<Test> {
    try {
      const { data } = await api.put(`/tests/${test.id}`, test);
      return data;
    } catch (error) {
      console.error('Error in updateTest:', error);
      throw error;
    }
  },

  async deleteTest(testId: string): Promise<void> {
    try {
      await api.delete(`/tests/${testId}`);
    } catch (error) {
      console.error('Error in deleteTest:', error);
      throw error;
    }
  }
};