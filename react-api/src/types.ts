export interface Article {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: { id: string; name: string };
  title: string;
  urlToImage: string;
  url: string;
}

export interface GET200Articles {
  articles: Article[];
}

export enum SortType {
  relevancy = 'relevancy',
  popularity = 'popularity',
  publishedAt = 'publishedAt',
}
