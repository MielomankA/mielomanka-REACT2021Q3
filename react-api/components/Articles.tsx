import React, { ChangeEvent, useEffect, useState } from 'react';
import { Article } from '../src/types';

interface ArticleProps {
  articles: Article[];
  page: number;
  onChangePage: (pageFromInput: number) => void;
}

export const Articles: React.FC<ArticleProps> = ({ articles, page, onChangePage }) => {
  const [artPage, setArtPage] = useState<number | string>('');

  useEffect(() => {
    setArtPage(page);
  }, [page]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const regexp = /\d+/;
    const matchedValue = value.match(regexp);

    if (matchedValue) {
      const newValue = +matchedValue[0];
      onChangePage(newValue);
      setArtPage(newValue);
    } else {
      setArtPage('');
    }
  };

  return (
    <div className="field-wrap">
      {articles.length ? (
        <div>
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
          <label htmlFor="search">
            <input className="page" value={artPage} onChange={handleChange} />
          </label>
        </div>
      ) : null}
    </div>
  );
};
