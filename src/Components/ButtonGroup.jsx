import React from 'react';
import './ButtonGroup.css';
import { Link } from 'react-router-dom';

const ButtonGroup = () => {
  return (
    <div className="button-container">
      <button className="custom-button">
        <Link to="/ts">Tren Superior</Link>
      </button>
      <button className="custom-button">
        <Link to="/ti">Tren Inferior</Link>
      </button>
    </div>
  );
};

export default ButtonGroup;
