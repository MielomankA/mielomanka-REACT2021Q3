import React from 'react';
import { Article } from '../src/types';

export const Articles: React.FC<{ articles: Article[] }> = ({ articles }) => {
  return (
    <div className="field-wrap">
      {articles.length ? (
        <ul className="field">
          {articles.map(({ author, title, description, publishedAt, urlToImage, url }, index: number) => {
            return (
              <li key={index}>
                <p className="article-title">{title}</p>
                <p>{author}</p>
                <p className="article-date">{publishedAt}</p>
                <div className="img-wrap">
                  <img className="article-img" src={urlToImage} alt={title} />
                </div>
                <p className="article-desc">{description}</p>
                <div className="list-button">
                  <a className="list-link" href={url} target="_blank" rel="noreferrer">
                    More...
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
};
