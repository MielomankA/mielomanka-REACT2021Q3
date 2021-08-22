import React from 'react';
import { FormValues } from './Form';

export interface CardProps {
  item: FormValues;
}

export const Card: React.FC<CardProps> = ({ item }) => {
  return (
    <div className="card">
      <span>Name: {item.firstName}</span>
      <span>Surname: {item.lastName}</span>
      <span>Birth date: {item.birthDate}</span>
      <span>Country: {item.country}</span>
      <span>Sex: {item.toggleButton}</span>
    </div>
  );
};
