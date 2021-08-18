import React, { ChangeEvent, useState } from 'react';

export const BirthDate: React.FC = () => {
  const [birthDate, setBirthDate] = useState<string>('');

  return (
    <label className="submitItem" htmlFor="birthDate">
      Birth date:
      <input
        type="date"
        name="birthDate"
        value={birthDate}
        onChange={(event: ChangeEvent<HTMLInputElement>) => setBirthDate(event.target.value)}
      />
    </label>
  );
};
