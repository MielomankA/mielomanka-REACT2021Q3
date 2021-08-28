import React from 'react';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <div className="header">
      <ul className="header-list">
        <li className="header-item">
          <Link to="/">
            <a className="header-link" href="#!">
              Home
            </a>
          </Link>
        </li>
        <li className="header-item">
          <Link to="/about">
            <a className="header-link" href="#!">
              About
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};
