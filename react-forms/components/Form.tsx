import '../src/style.css';
import React, { ChangeEvent, useState } from 'react';

export interface FormValues {
  firstName?: string;
  lastName?: string;
  birthDate?: string;
  country?: string;
  agree?: boolean;
}

export interface FormValuesProps {
  setFormValue: React.Dispatch<React.SetStateAction<FormValues[]>>;
}

export const Form: React.FC<FormValuesProps> = ({ setFormValue }) => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [birthDate, setBirthDate] = useState<string>('');
  const [country, setCountry] = useState<string>('Russia');
  const [agree, setAgree] = useState<boolean>(false);

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setFormValue((state) => [...state, { firstName, lastName, birthDate, country, agree }]);
    /*   console.log(); */
  };

  return (
    <form className="submitForm" onSubmit={handleSubmit}>
      <label className="submitItem" htmlFor="firstName">
        Name:
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={(event: ChangeEvent<HTMLInputElement>) => setFirstName(event.target.value)}
        />
      </label>
      <label className="submitItem" htmlFor="lastName">
        Surname:
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={(event: ChangeEvent<HTMLInputElement>) => setLastName(event.target.value)}
        />
      </label>
      <label className="submitItem" htmlFor="birthDate">
        Birth date:
        <input
          type="date"
          name="birthDate"
          value={birthDate}
          onChange={(event: ChangeEvent<HTMLInputElement>) => setBirthDate(event.target.value)}
        />
      </label>
      <label className="submitItem" htmlFor="country">
        Country:
        <select
          className="submitSelect"
          name="country"
          value={country}
          onChange={(event: ChangeEvent<HTMLSelectElement>) => setCountry(event.target.value)}
        >
          <option>Russia</option>
          <option>Belarus</option>
          <option>Ukraine</option>
        </select>
      </label>
      <label htmlFor="agree">
        I agree to send my data
        <input type="checkbox" name="agree" checked={agree} onChange={() => setAgree((prev) => !prev)} />
      </label>
      <div className="submitButton">
        <input type="submit" value="Send" />
      </div>
    </form>
  );
};
