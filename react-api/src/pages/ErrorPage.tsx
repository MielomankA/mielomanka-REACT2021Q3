import React from 'react';

export const ErrorPage: React.FC = () => {
  return (
    <div className="error">
      <p>Sorry, the page was not found. Try again!</p>
      <img src="../public/error_404.png" alt="Error 404" />
    </div>
  );
};
