import { AxiosResponse } from 'axios';
import React, { ChangeEvent, useState } from 'react';
import axios from '../services/api';
import { Article, GET200Articles } from '../types';
import { Articles } from '../../components/Articles';

const API_KEY = '8c4af3f5923644749daf7fb16b4ea169';

export const MainPage: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [arts, setArts] = useState<Article[]>([]);

  const hundleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response: AxiosResponse<GET200Articles> = await axios.get(
        `v2/everything?q=${searchValue}&apiKey=${API_KEY}`,
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
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Search'}
        </button>
      </form>
      <Articles articles={arts} />
    </div>
  );
};
