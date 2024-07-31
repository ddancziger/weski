import React from 'react';
import PropTypes from 'prop-types';
import ResultItem from './ResultItem';
import './ResultItems.css';

const ResultItems = ({ place, hotels, className = '' }) => {
  return (
    <section className={`result-items ${className}`}>
      {hotels.map((hotel, index) => (
        <ResultItem
          key={index}
          itemDetails={
            hotel.HotelDescriptiveContent.Images[0]?.URL || '/placeholder.png'
          }
          chaletNina={hotel.HotelName}
          iconStar="/iconstar.svg"
          iconStar1="/iconstar.svg"
          iconStar2="/iconstar.svg"
          iconStar3="/iconstar.svg"
          iconlocationCircle="/iconlocation-circle.svg"
          price={hotel.PricesInfo.AmountAfterTax}
          place={place}
        />
      ))}
    </section>
  );
};

ResultItems.propTypes = {
  hotels: PropTypes.array.isRequired,
  className: PropTypes.string,
};

export default ResultItems;
