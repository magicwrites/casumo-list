import React from 'react';
import './style.css';

const Spinner = ({ children }) => {
  return (
    <div className="spinner">
      <div className="spinner-icon"></div>
      <span className="spinner-text">{ children }</span>
    </div>
  )
}

export default Spinner