import React from 'react';
import PropTypes from 'prop-types';
import './Buttonstructure.css';

const Buttonstructure = ({ className = '', onClick }) => {
  return (
    <div className={`buttonstructure ${className}`} onClick={onClick}>
      <img className="iconsearch" alt="" src="/iconsearch.svg" />
      <div className="search-field">
        <div className="label-wrapper">
          <div className="label">Search</div>
        </div>
      </div>
      <img className="iconchevrom-up" alt="" src="/iconchevrom-up.svg" />
    </div>
  );
};

Buttonstructure.propTypes = {
  className: PropTypes.string,
};

export default Buttonstructure;
