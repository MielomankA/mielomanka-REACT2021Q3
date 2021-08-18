import React, { ChangeEvent, useState } from 'react';

export const FirstName: React.FC = () => {
  const [firstName, setFirstName] = useState<string>('');

  return (
    <label className="submitItem" htmlFor="firstName">
      Name:
      <input
        type="text"
        name="firstName"
        value={firstName}
        onChange={(event: ChangeEvent<HTMLInputElement>) => setFirstName(event.target.value)}
      />
    </label>
  );
};
