import React, { useState } from 'react';

export const CheckboxAgree: React.FC = () => {
  const [agree, setAgree] = useState<boolean>(false);

  return (
    <label htmlFor="agree">
      I agree to send my data
      <input type="checkbox" name="agree" checked={agree} onChange={() => setAgree((prev) => !prev)} />
    </label>
  );
};
