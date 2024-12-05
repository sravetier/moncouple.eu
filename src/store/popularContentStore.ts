import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Test } from '../types/test';
import { Article } from '../types/article';

interface PopularContentState {
  popularArticleIds: string[];
  popularTestIds: string[];
  setPopularArticles: (articleIds: string[]) => void;
  setPopularTests: (testIds: string[]) => void;
  getPopularArticles: (allArticles: Article[]) => Article[];
  getPopularTests: (allTests: Test[]) => Test[];
}

export const usePopularContentStore = create<PopularContentState>()(
  persist(
    (set, get) => ({
      popularArticleIds: ['article-1', 'article-2', 'article-3'],
      popularTestIds: ['communication', 'trust', 'intimacy'],
      
      setPopularArticles: (articleIds) => {
        if (articleIds.length > 3) {
          articleIds = articleIds.slice(0, 3);
        }
        set({ popularArticleIds: articleIds });
      },
      
      setPopularTests: (testIds) => {
        if (testIds.length > 3) {
          testIds = testIds.slice(0, 3);
        }
        set({ popularTestIds: testIds });
      },
      
      getPopularArticles: (allArticles) => {
        const popularIds = get().popularArticleIds;
        return allArticles
          .filter(article => popularIds.includes(article.id))
          .slice(0, 3);
      },
      
      getPopularTests: (allTests) => {
        const popularIds = get().popularTestIds;
        return allTests
          .filter(test => popularIds.includes(test.id))
          .slice(0, 3);
      }
    }),
    {
      name: 'popular-content-storage'
    }
  )
);