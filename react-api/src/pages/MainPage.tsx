import { AxiosResponse } from 'axios';
import React, { ChangeEvent, useState } from 'react';
import axios from '../services/api';
import { Article, GET200Articles, SortType } from '../types';
import { Articles } from '../../components/Articles';

const API_KEY = '8c4af3f5923644749daf7fb16b4ea169';

export const MainPage: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [arts, setArts] = useState<Article[]>([]);
  const [sortBy, setSortBy] = useState<SortType>(SortType.popularity);

  const hundleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response: AxiosResponse<GET200Articles> = await axios.get(
        `v2/everything?q=${searchValue}&apiKey=${API_KEY}&sortBy=${sortBy}`,
      );
      setArts(response.data.articles);
    } catch (err) {
      // console.error(err);
    } finally {
      setIsLoading(false);
    }
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target; // const {value} = e.target;
    setSearchValue(value);
  };

  return (
    <div className="page-wrap">
      <div className="wrap-form">
        <form className="form-search-group" onSubmit={hundleSubmit}>
          <label htmlFor="search">
            <input
              id="search"
              className="form-input"
              type="text"
              value={searchValue}
              onChange={handleChange}
              disabled={isLoading}
            />
          </label>
          <button className="form-button" type="submit" disabled={isLoading}>
            {isLoading ? 'Loading...' : 'Search'}
          </button>
        </form>
      </div>
      <div className="form-radio">
        <label htmlFor="search">
          <input
            type="radio"
            value={SortType.relevancy}
            checked={sortBy === SortType.relevancy}
            onChange={() => setSortBy(SortType.relevancy)}
          />
          relevancy
        </label>
        <label htmlFor="search">
          <input
            type="radio"
            value={SortType.popularity}
            checked={sortBy === SortType.popularity}
            onChange={() => setSortBy(SortType.popularity)}
          />
          popularity
        </label>
        <label htmlFor="search">
          <input
            type="radio"
            value={SortType.publishedAt}
            checked={sortBy === SortType.publishedAt}
            onChange={() => setSortBy(SortType.publishedAt)}
          />
          publishedAt
        </label>
      </div>
      <Articles articles={arts} />
    </div>
  );
};
