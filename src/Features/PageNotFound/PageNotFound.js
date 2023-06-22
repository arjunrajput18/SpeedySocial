import React from 'react';
import { Link } from 'react-router-dom';
import './PageNotFound.css';

export const PageNotFound = () => {
  return (
    <div className="page-not-found">

      <h1 className="error-message">
        Oops! Looks like you have lost your way.
      </h1>
      <p className="error-description">
        The page you're looking for does not exist.
      </p>
      <Link to="/" className="goto-link">
        Go to Homepage
      </Link>
    </div>
  );
};

