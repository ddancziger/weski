import React, { useState, useEffect } from 'react';
import TopHeader from '../components/TopHeader';
import ResultItems from '../components/ResultItems';
import Loader from '../components/Loader';

import './HomePage.css';
import socket from '../socket';
import { v4 as uuidv4 } from 'uuid';
const ResultPage = () => {
  const [hotels, setHotels] = useState([]);
  const [searchId, setSearchId] = useState(null);
  const [metadata, setMetadata] = useState(null);
  const [loading, setLoading] = useState(false);
  const places = {
    1: 'Val Thorens',
    2: 'Courchevel',
    3: 'Tignes',
    4: 'La Plagne',
    5: 'Chamonix',
  };
  useEffect(() => {
    socket.onmessage = (event) => {
      const {
        searchId: resultSearchId,
        result,
        finish,
      } = JSON.parse(event.data);

      if (resultSearchId === searchId) {
        if (finish) {
          setLoading(false);
        } else {
          setHotels((prevHotels) => {
            const newResults = result.filter(
              (newHotel) =>
                !prevHotels.some(
                  (existingHotel) =>
                    existingHotel.HotelCode === newHotel.HotelCode,
                ),
            );
            return [...prevHotels, ...newResults].sort(
              (a, b) =>
                parseFloat(a.PricesInfo.AmountAfterTax) -
                parseFloat(b.PricesInfo.AmountAfterTax),
            );
          });
        }
      }
    };

    return () => {
      socket.onmessage = null;
    };
  }, [searchId]);

  const handleSearch = (payload, metadata) => {
    if (socket.readyState === socket.CLOSED) {
      console.log('socket closed');
    }
    const newSearchId = uuidv4();
    setLoading(true);
    setSearchId(newSearchId);
    metadata = {
      ...metadata,
      site: places[metadata.site],
    };
    setMetadata(metadata);
    setHotels([]); // Clear previous results
    socket.send(JSON.stringify({ ...payload, searchId: newSearchId }));
  };

  return (
    <div className="result-page">
      <TopHeader onSearch={handleSearch} />
      <div className="trip-selection">
        <div className="trip-options">
          <h1 className="select-your-ski">Select your ski trip</h1>
          <div className="ski-trips-options">
            {hotels.length > 0
              ? `
            ${hotels.length} ski trips options • ${metadata?.site} •
            ${metadata?.from} - ${metadata?.to} • ${metadata?.group} people`
              : ''}
          </div>
        </div>
      </div>
      <main className="results">
        <ResultItems hotels={hotels} place={metadata?.site} />
        {loading && <Loader />}
      </main>
    </div>
  );
};

export default ResultPage;
