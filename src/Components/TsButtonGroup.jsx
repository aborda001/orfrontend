import React from 'react';
import './ButtonGroup.css';
import { Link } from 'react-router-dom';

const TsButtonGroup = () => {
  return (
    <div className="button-container">
      <button className="custom-button">
        <Link to="/ts1">Flexiones de brazo</Link>
      </button>
      <button className="custom-button">
        <Link to="/ts2">Dominadas</Link>
      </button>
      <button className="custom-button">
        <Link to="/ts3">Press de hombros</Link>
      </button>
      <button className="custom-button">
        <Link to="/ts4">Remos con pesos</Link>
      </button>
    </div>
  );
};

export default TsButtonGroup;
