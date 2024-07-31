import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addMonths, addWeeks, format } from 'date-fns';

const resorts = [
  { id: 1, name: 'Val Thorens' },
  { id: 2, name: 'Courchevel' },
  { id: 3, name: 'Tignes' },
  { id: 4, name: 'La Plagne' },
  { id: 5, name: 'Chamonix' },
];

const SearchBar = ({ onSearch }) => {
  const [destination, setDestination] = useState('');
  const [groupSize, setGroupSize] = useState('');
  const [fromDate, setFromDate] = useState(addMonths(new Date(), 1));
  const [toDate, setToDate] = useState(addWeeks(addMonths(new Date(), 1), 1));

  const handleSearch = () => {
    const payload = {
      ski_site: parseInt(destination),
      from_date: format(fromDate, 'MM/dd/yyyy'),
      to_date: format(toDate, 'MM/dd/yyyy'),
      group_size: parseInt(groupSize),
    };
    onSearch(payload);
  };

  return (
    <div className="search-bar">
      <select
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      >
        <option value="">Select Destination</option>
        {resorts.map((resort) => (
          <option key={resort.id} value={resort.id}>
            {resort.name}
          </option>
        ))}
      </select>
      <select value={groupSize} onChange={(e) => setGroupSize(e.target.value)}>
        <option value="">Group Size</option>
        {Array.from({ length: 10 }, (_, i) => i + 1).map((size) => (
          <option key={size} value={size}>
            {size} {size > 1 ? 'people' : 'person'}
          </option>
        ))}
      </select>
      <DatePicker
        selected={fromDate}
        onChange={(date) => setFromDate(date)}
        dateFormat="MM/dd/yyyy"
        placeholderText="From Date"
      />
      <DatePicker
        selected={toDate}
        onChange={(date) => setToDate(date)}
        dateFormat="MM/dd/yyyy"
        placeholderText="To Date"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
