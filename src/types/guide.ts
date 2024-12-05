```typescript
export type GuideCategory = 'separation' | 'rebuild' | 'save-relationship';

export interface GuideSubcategory {
  id: string;
  name: string;
  category: GuideCategory;
}

export interface Guide {
  id: string;
  title: string;
  content: string;
  image: string;
  summary: string;
  category: GuideCategory;
  subcategoryId: string;
  publishedAt: string;
  author: string;
}
```