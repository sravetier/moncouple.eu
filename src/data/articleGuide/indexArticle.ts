import { article as faireLepointArticle1 } from './faire-le-point-1';
import { article as faireLepointArticle2 } from './faire-le-point-2';
import { article as faireLepointArticle3 } from './faire-le-point-3';
import { article as seSeparerArticle1 } from './se-separer-1';
import { article as seSeparerArticle2 } from './se-separer-2';
import { article as seReconstruireArticle1 } from './se-reconstruire-1';
import { article as seReconstruireArticle2 } from './se-reconstruire-2';
import { article as sauverCoupleArticle1 } from './sauver-couple-1';
import { article as sauverCoupleArticle2 } from './sauver-couple-2';
import { article as sauverCoupleArticle3 } from './sauver-couple-3';
import type { Article } from '../../types/article';

export const articles: Article[] = [
  faireLepointArticle1,
  faireLepointArticle2,
  faireLepointArticle3,
  seSeparerArticle1,
  seSeparerArticle2,
  seReconstruireArticle1,
  seReconstruireArticle2,
  sauverCoupleArticle1,
  sauverCoupleArticle2,
  sauverCoupleArticle3
];

export function findArticleById(id: string): Article | undefined {
  return articles.find(article => article.id === id);
}