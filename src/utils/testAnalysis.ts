import { Test } from '../types/test';

export const getTestAnalysis = (test: Test, score: number): string => {
  const range = test.scoreRanges.find(
    r => score >= r.minScore && score <= r.maxScore
  );
  return range?.analysis || "Aucune analyse disponible pour ce score";
};