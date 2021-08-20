import React from 'react';
import { FormValues } from './Form';

export interface CardProps {
  item: FormValues;
}

export const Card: React.FC<CardProps> = ({ item }) => {
  return (
    <div className="card">
      <span>{item.firstName}</span>
      <span>{item.lastName}</span>
    </div>
  );
};
