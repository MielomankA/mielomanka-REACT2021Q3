import React from 'react';
import { Article } from '../src/types';

export const Articles: React.FC<{ articles: Article[] }> = ({ articles }) => {
  return (
    <div>
      <ul>
        {articles.map(({ author, title, description, publishedAt, urlToImage }, index: number) => {
          return (
            <li key={index}>
              <p>{title}</p>
              <p>{author}</p>
              <p>{publishedAt}</p>
              <img width={400} src={urlToImage} alt={title} />
              <p>{description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
