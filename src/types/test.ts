export interface Question {
  id: number;
  text: string;
  options: {
    id: number;
    text: string;
    value: number;
  }[];
}

export interface Test {
  id: string;
  title: string;
  image: string;
  description: string;
  questions: Question[];
  getAnalysis: (score: number) => string;
}

export interface TestResult {
  testId: string;
  date: string;
  score: number;
  analysis: string;
}