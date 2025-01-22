import React from 'react';
import './ButtonGroup.css';
import { Link } from 'react-router-dom';

const TiButtonGroup = () => {
  return (
    <div className="button-container">
      <button className="custom-button">
        <Link to="/ti1">Sentadillas</Link>
      </button>
      <button className="custom-button">
        <Link to="/ti2">Peso muerto</Link>
      </button>
      <button className="custom-button">
        <Link to="/ti3">Estocadas</Link>
      </button>
      <button className="custom-button">
        <Link to="/ti4">Sentadillas búlgaras</Link>
      </button>
    </div>
  );
};

export default TiButtonGroup;
