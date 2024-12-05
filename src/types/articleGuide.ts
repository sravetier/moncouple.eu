export interface Link {
    text: string;
    url: string;
  }
  
  export interface ContentSection {
    subtitle: string;
    points?: string[];
    checklistItems?: string[];
  }
  
  export interface Section {
    title: string;
    content: ContentSection[];
  }
  
  export interface Resource {
    title: string;
    links: Link[];
  }
  
  export interface ArticleGuide {
    id: string;
    title: string;
    image: string;
    description: string;
    category: 'separation' | 'rebuild' | 'save-relationship';
    sections: Section[];
    resources: Resource[];
  }