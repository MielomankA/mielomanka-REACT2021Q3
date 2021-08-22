import '../src/style.css';
import React, { ChangeEvent, useEffect, useState } from 'react';

export interface FormValues {
  firstName: string;
  lastName: string;
  birthDate: string;
  country: string;
  toggleButton: string;
  agree: boolean;
}

export interface FormValuesProps {
  setFormValue: React.Dispatch<React.SetStateAction<FormValues[]>>;
}

interface Errors {
  firstName?: string;
  lastName?: string;
  birthDate?: string;
  country?: string;
  agree?: boolean;
}

export const Form: React.FC<FormValuesProps> = ({ setFormValue }) => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [birthDate, setBirthDate] = useState<string>('');
  const [country, setCountry] = useState<string>('Select');
  const [agree, setAgree] = useState<boolean>(false);
  const [errors, setErrors] = useState<Errors | null>(null);
  const [toggleButton, setToggleButton] = useState<string>('Male');

  const validate = () => {
    setErrors({} as Errors);

    if (firstName === '') {
      setErrors((state) => ({ ...state, firstName } as Errors));
    }
    if (lastName === '') {
      setErrors((state) => ({ ...state, lastName } as Errors));
    }
    if (birthDate === '') {
      setErrors((state) => ({ ...state, birthDate } as Errors));
    }
    if (country === 'Select') {
      setErrors((state) => ({ ...state, country } as Errors));
    }
    if (!agree) {
      setErrors((state) => ({ ...state, agree } as Errors));
    }
  };

  useEffect(() => {
    validate();
  }, [agree, firstName, lastName, birthDate, country]);

  /*   const SuccessMessage = () => {
    return <p className="success">Your data has been successfully saved!</p>;
  }; */

  const reset = () => {
    setAgree(false);
    setCountry('Select');
    setBirthDate('');
    setLastName('');
    setFirstName('');
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (Object.keys(errors as Errors).length === 0) {
      setFormValue((state) => [...state, { firstName, lastName, birthDate, country, toggleButton, agree }]);
      reset();
    }
    /*   console.log(); */
  };

  return (
    <div className="submitFormWrap">
      <form className="submitForm" onSubmit={handleSubmit}>
        <label className="submitItem" htmlFor="firstName">
          <span>Name:</span>
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={(event: ChangeEvent<HTMLInputElement>) => setFirstName(event.target.value)}
          />
          <p>{errors?.firstName === '' && <span className="errors">* name should be fill</span>}</p>
        </label>
        <label className="submitItem" htmlFor="lastName">
          <span>Surname:</span>
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={(event: ChangeEvent<HTMLInputElement>) => setLastName(event.target.value)}
          />
          <p>{errors?.lastName === '' && <span className="errors">* lastname should be fill</span>}</p>
        </label>
        <label className="submitItem" htmlFor="birthDate">
          <span>Birth date:</span>
          <input
            type="date"
            name="birthDate"
            value={birthDate}
            onChange={(event: ChangeEvent<HTMLInputElement>) => setBirthDate(event.target.value)}
          />
          <p>{errors?.birthDate === '' && <span className="errors">* birth date should be fill</span>}</p>
        </label>
        <label className="submitItem" htmlFor="country">
          <span>Country:</span>
          <select
            className="submitSelect"
            name="country"
            value={country}
            onChange={(event: ChangeEvent<HTMLSelectElement>) => setCountry(event.target.value)}
          >
            <option>Select</option>
            <option>Russia</option>
            <option>Belarus</option>
            <option>Ukraine</option>
          </select>
          <p>{errors?.country === 'Select' && <span className="errors">* country should be fill</span>}</p>
        </label>
        <div className="formTogglebutton">
          <p className="toggleMale">Male</p>
          <label htmlFor="toggleButton" className="textButton">
            <input
              type="checkbox"
              id="toggleButton"
              className="toggleButton"
              name="toggleButton"
              // checked={toggleButton}
              onChange={() => {
                toggleButton === 'Male' ? setToggleButton('Female') : setToggleButton('Male');
              }}
            />
          </label>
          <p className="toggleFemale">Female</p>
        </div>
        <label className="agree" htmlFor="agree">
          <p>
            I agree to send my data
            {errors?.agree !== undefined && <span className="errors">* agree should be check</span>}
          </p>
          <input
            className="labelAgree"
            type="checkbox"
            name="agree"
            checked={agree}
            onChange={() => setAgree((prev) => !prev)}
          />
        </label>
        <div className="submitButton">
          <input type="submit" value="Send" />
        </div>
      </form>
    </div>
  );
};
