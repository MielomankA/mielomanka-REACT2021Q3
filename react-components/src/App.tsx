import React from 'react';
import { Searchbar } from '../components/Searchbar';
import { CardsField } from '../components/CardsField';

export const App = () => {
  return (
    <div className="wrap">
      <Searchbar />
      <CardsField />
    </div>
  );
};
