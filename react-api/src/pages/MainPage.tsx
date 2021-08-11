import React, { ChangeEvent, useState } from 'react';
import axios from '../services/api';

export const MainPage: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const hundleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.get(`v2/everything?q=${searchValue}&apiKey=${process.env.API_KEY}`);
    } catch (err) {
      console.error(err);
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
    </div>
  );
};
