import React, { ChangeEvent, useState } from 'react';

export const LastName: React.FC = () => {
  const [lastName, setLastName] = useState<string>('');

  return (
    <label className="submitItem" htmlFor="lastName">
      Surname:
      <input
        type="text"
        name="lastName"
        value={lastName}
        onChange={(event: ChangeEvent<HTMLInputElement>) => setLastName(event.target.value)}
      />
    </label>
  );
};
