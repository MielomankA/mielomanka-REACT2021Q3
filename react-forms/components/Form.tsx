import '../src/style.css';
import { useState, useEffect } from 'react';

interface formData {
  firstName?: string;
  lastName?: string;
}

/* interface IForm {
  setFormData: (state: formData[]) => void;
} */

export const Form: React.FC<formData> = ({ /* setFormValue */ }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log(firstName);
  };

  return (
    <form className="submitForm" onSubmit={handleSubmit}>
      {/* <lable className="submitItem" htmlFor="search">
        Name:
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={(event: ChangeEvent<HTMLInputElement>) => setFirstName(event.target.value)}
        />
      </lable>
      <lable className="submitItem" htmlFor="lastName">
        Surname:
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={(event: ChangeEvent<HTMLInputElement>) => setLastName(event.target.value)}
        />
      </lable>
      <div className="submitButton">
        <input type="submit" value="Send" />
      </div> */}
    </form>
  );
};
