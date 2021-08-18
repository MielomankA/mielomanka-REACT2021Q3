import '../src/style.css';
import React from 'react';
import { FirstName } from './FirstName';
import { LastName } from './LastName';
import { BirthDate } from './BirthDate';
import { SelectCountry } from './SelectCountry';
import { CheckboxAgree } from './CheckboxAgree';
import { SubmitButton } from './SubmitButton';

export const Form: React.FC = (
  {
    /* setFormValue */
  },
) => {
  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log();
  };

  return (
    <form className="submitForm" onSubmit={handleSubmit}>
      <FirstName />
      <LastName />
      <BirthDate />
      <SelectCountry />
      <CheckboxAgree />
      <SubmitButton />
    </form>
  );
};
