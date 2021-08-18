import React, { ChangeEvent, useState } from 'react';

export const SelectCountry: React.FC = () => {
  const [country, setCountry] = useState<string>('Russia');

  return (
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
  );
};
