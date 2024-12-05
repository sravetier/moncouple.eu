import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Article } from '../types/article';

const initialArticles: Article[] = [
  {
    id: 'article-1',
    title: "5 signes qui montrent qu'il est temps de consulter un thérapeute de couple",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800&h=500",
    summary: "Découvrez les signaux d'alerte qui indiquent qu'une aide professionnelle pourrait être bénéfique pour votre couple.",
    content: `# 5 signes qui montrent qu'il est temps de consulter un thérapeute de couple

La communication est rompue, les conflits se multiplient... Voici les 5 signes qui indiquent qu'il est peut-être temps de consulter.

## 1. La communication est devenue difficile

Vous ne parvenez plus à avoir des conversations constructives. Les discussions tournent rapidement au conflit ou au silence.

## 2. Les mêmes problèmes reviennent sans cesse

Vous avez l'impression de tourner en rond, les mêmes sujets de dispute reviennent régulièrement sans trouver de solution.

## 3. La distance s'installe

Vous vous sentez de plus en plus éloignés l'un de l'autre, émotionnellement et/ou physiquement.

## 4. Le ressentiment s'accumule

Des rancœurs non exprimées s'accumulent et créent un fossé entre vous.

## 5. Vous évitez les conflits

Par peur ou par lassitude, vous préférez éviter les sujets qui fâchent plutôt que de les affronter.`,
    publishedAt: "2024-03-15T10:00:00Z",
    author: "Dr. Marie Lambert",
    category: "Thérapie de couple"
  },
  {
    id: 'article-2',
    title: "Comment gérer les conflits financiers dans son couple",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800&h=500",
    summary: "Des conseils pratiques pour aborder sereinement les questions d'argent dans votre relation.",
    content: `# Comment gérer les conflits financiers dans son couple

L'argent est l'une des principales sources de conflit dans les couples. Voici comment mieux gérer cet aspect de votre relation.

## Établir un budget commun

La première étape est de mettre en place un budget clair et accepté par les deux partenaires.

## Communiquer ouvertement

Parlez régulièrement de vos finances, de vos objectifs et de vos inquiétudes.

## Respecter l'autonomie de chacun

Gardez une part d'indépendance financière tout en construisant des projets communs.`,
    publishedAt: "2024-03-14T14:30:00Z",
    author: "Sophie Martin",
    category: "Finances"
  },
  {
    id: 'article-3',
    title: "Reconstruire la confiance après une infidélité",
    image: "https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?auto=format&fit=crop&q=80&w=800&h=500",
    summary: "Un guide pour reconstruire une relation solide après une trahison.",
    content: `# Reconstruire la confiance après une infidélité

La reconstruction après une infidélité est possible, mais demande du temps et des efforts des deux partenaires.

## Le temps de la guérison

Acceptez que la guérison prenne du temps et suivez votre propre rythme.

## La transparence est essentielle

La personne qui a trahi doit faire preuve d'une totale transparence pour reconstruire la confiance.

## L'aide professionnelle

Un thérapeute peut vous aider à traverser cette épreuve et à reconstruire votre relation.`,
    publishedAt: "2024-03-13T09:15:00Z",
    author: "Dr. Thomas Dubois",
    category: "Reconstruction"
  }
];

interface ArticlesState {
  articles: Article[];
  addArticle: (article: Omit<Article, 'id'>) => void;
  updateArticle: (article: Article) => void;
  deleteArticle: (articleId: string) => void;
  getAllArticles: () => Article[];
}

export const useArticlesStore = create<ArticlesState>()(
  persist(
    (set, get) => ({
      articles: initialArticles,
      
      addArticle: (articleData) => {
        const newArticle: Article = {
          id: `article-${Date.now()}`,
          ...articleData
        };
        set((state) => ({
          articles: [...state.articles, newArticle]
        }));
      },
      
      updateArticle: (updatedArticle) => set((state) => ({
        articles: state.articles.map((article) => 
          article.id === updatedArticle.id ? updatedArticle : article
        )
      })),
      
      deleteArticle: (articleId) => set((state) => ({
        articles: state.articles.filter((article) => article.id !== articleId)
      })),
      
      getAllArticles: () => get().articles
    }),
    {
      name: 'articles-storage'
    }
  )
);