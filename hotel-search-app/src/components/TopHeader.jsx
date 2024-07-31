import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button48px from './Button48px';
import './TopHeader.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addMonths, addWeeks, format } from 'date-fns';

const TopHeader = ({ onSearch, className = '' }) => {
  const [destination, setDestination] = useState('');
  const [groupSize, setGroupSize] = useState('');
  const [fromDate, setFromDate] = useState(addMonths(new Date(), 1));
  const [toDate, setToDate] = useState(addWeeks(addMonths(new Date(), 1), 1));

  const handleSearch = () => {
    if (!destination || !groupSize || !fromDate || !toDate) {
      alert('Please fill in all fields');
      return;
    }
    console.log('handle search');
    const payload = {
      ski_site: parseInt(destination),
      from_date: format(fromDate, 'MM/dd/yyyy'),
      to_date: format(toDate, 'MM/dd/yyyy'),
      group_size: parseInt(groupSize),
    };
    const metadata = {
      site: parseInt(destination),
      from: format(fromDate, 'MMM dd'),
      to: format(toDate, 'MMM dd'),
      group: parseInt(groupSize),
    };
    onSearch(payload, metadata);
  };

  return (
    <header className={`top-header ${className}`}>
      <div className="top-header-child" />
      <div className="resort-info">
        <div className="info-icons">
          <div className="image">
            <img
              className="proptechbuzz-all-rights-res"
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
          </div>
          <div className="iconresort-parent">
            <img className="iconresort" alt="" src="/iconresort.svg" />
            <select
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              required
            >
              <option value="">Select Destination</option>
              <option value="1">Val Thorens</option>
              <option value="2">Courchevel</option>
              <option value="3">Tignes</option>
              <option value="4">La Plagne</option>
              <option value="5">Chamonix</option>
            </select>
            <div className="frame-child" />
          </div>
          <div className="icongroup-parent">
            <img
              className="icongroup"
              loading="lazy"
              alt=""
              src="/icongroup.svg"
            />
            <select
              value={groupSize}
              onChange={(e) => setGroupSize(e.target.value)}
              required
            >
              <option value="">Group Size</option>
              {Array.from({ length: 10 }, (_, i) => i + 1).map((size) => (
                <option key={size} value={size}>
                  {size} {size > 1 ? 'people' : 'person'}
                </option>
              ))}
            </select>
            <div className="frame-item" />
          </div>
          <div className="iconcalendar-parent">
            <img
              className="iconcalendar"
              loading="lazy"
              alt=""
              src="/iconcalendar.svg"
            />
            <DatePicker
              selected={fromDate}
              onChange={(date) => setFromDate(date)}
              dateFormat="MM/dd/yyyy"
              placeholderText="From Date"
              required
            />
            <DatePicker
              selected={toDate}
              onChange={(date) => setToDate(date)}
              dateFormat="MM/dd/yyyy"
              placeholderText="To Date"
              required
            />
            <div className="frame-inner" />
          </div>
          <Button48px onClick={handleSearch} />
        </div>
      </div>
      <div className="divider" />
    </header>
  );
};

TopHeader.propTypes = {
  onSearch: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default TopHeader;
