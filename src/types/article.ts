export interface Article {
  id: string;
  title: string;
  category: 'Faire le point' | 'Se séparer' | 'Se reconstruire' | 'Sauver son couple';
  coverImage: string;
  excerpt: string;
  content: string;
  images: string[];
}

export interface Section {
  title: string;
  content: string;
}

export interface ArticleContent {
  intro: string;
  keyPoints: {
    sections: Section[];
    plainContent: string;
  };
  quote: string;
  imageSection: {
    sections: Section[];
    plainContent: string;
  };
  mainContent: {
    sections: Section[];
    plainContent: string;
  };
  conclusion: {
    sections: Section[];
    plainContent: string;
  };
}