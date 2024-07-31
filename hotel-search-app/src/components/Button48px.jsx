import React from 'react';
import PropTypes from 'prop-types';
import Buttonstructure from './Buttonstructure';
import './Button48px.css';

const Button48px = ({ className = '', onClick }) => {
  return (
    <button className={`button-48px ${className}`}>
      <Buttonstructure onClick={onClick} />
    </button>
  );
};

Button48px.propTypes = {
  className: PropTypes.string,
};

export default Button48px;
