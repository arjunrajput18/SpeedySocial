import React from 'react';
import { Link } from 'react-router-dom';
import './PageNotFound.css';
import { useData } from '../../Context/DataContext';

export const PageNotFound = () => {
  const {darkMode} =useData()
  return (
    <div className={`page-not-found-main ${darkMode && "bgDarkmode"}`}>

    <div className={`page-not-found ${darkMode && "bgDarkmode"}`}>

      <h1 className={`error-message ${darkMode && "bgDarkmode"}`}>
        Oops! Looks like you have lost your way.
      </h1>
      <p className={`error-description ${darkMode && "bgDarkmode"}`}>
        The page you're looking for does not exist.
      </p>
      <Link to="/" className="goto-link">
        Go to Homepage
      </Link>
    </div>
    
    </div>
  );
};

