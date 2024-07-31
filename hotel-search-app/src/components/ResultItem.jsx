import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import './ResultItem.css';

const ResultItem = ({
  className = '',
  itemDetails,
  chaletNina,
  iconStar,
  iconStar1,
  iconStar2,
  iconStar3,
  iconlocationCircle,
  place,
  price,
  propHeight,
  propWidth,
  propHeight1,
  propFlex,
  propFlex1,
  propMinWidth,
  propAlignSelf,
  propHeight2,
  propDisplay,
}) => {
  const itemContentStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const frameDivStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const frameDiv1Style = useMemo(() => {
    return {
      height: propHeight1,
    };
  }, [propHeight1]);

  const frameDiv2Style = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const priceItemsStyle = useMemo(() => {
    return {
      flex: propFlex1,
    };
  }, [propFlex1]);

  const divStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
      alignSelf: propAlignSelf,
    };
  }, [propMinWidth, propAlignSelf]);

  const perPersonStyle = useMemo(() => {
    return {
      height: propHeight2,
      display: propDisplay,
    };
  }, [propHeight2, propDisplay]);

  return (
    <div className={`result-item ${className}`}>
      <img
        className="item-details-icon"
        loading="lazy"
        alt=""
        src={itemDetails}
      />
      <div className="item-content" style={itemContentStyle}>
        <div className="frame-parent">
          <div className="frame-group" style={frameDivStyle}>
            <div className="chalet-nina-parent">
              <div className="chalet-nina">{chaletNina}</div>
              <div className="iconstar-parent">
                <img
                  className="iconstar"
                  loading="lazy"
                  alt=""
                  src={iconStar}
                />
                <img className="iconstar1" alt="" src={iconStar1} />
                <img className="iconstar2" alt="" src={iconStar2} />
                <img className="iconstar3" alt="" src={iconStar3} />
              </div>
            </div>
            <div className="frame-wrapper">
              <div className="iconlocation-circle-parent">
                <img
                  className="iconlocation-circle"
                  loading="lazy"
                  alt=""
                  src={iconlocationCircle}
                />
                <div className="la-plagne">{place}</div>
              </div>
            </div>
          </div>
          <div className="frame-container" style={frameDiv1Style}>
            <div className="line-wrapper">
              <div className="line-div" />
            </div>
            <div className="price-items-wrapper" style={frameDiv2Style}>
              <div className="price-items" style={priceItemsStyle}>
                <div className="div" style={divStyle}>
                  £{price}
                </div>
                <div className="per-person" style={perPersonStyle}>
                  /per person
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ResultItem.propTypes = {
  className: PropTypes.string,
  itemDetails: PropTypes.string,
  chaletNina: PropTypes.string,
  iconStar: PropTypes.string,
  iconStar1: PropTypes.string,
  iconStar2: PropTypes.string,
  iconStar3: PropTypes.string,
  iconlocationCircle: PropTypes.string,
  iconcenter: PropTypes.string,
  price: PropTypes.string,
  propHeight: PropTypes.any,
  propWidth: PropTypes.any,
  propHeight1: PropTypes.any,
  propFlex: PropTypes.any,
  propFlex1: PropTypes.any,
  propMinWidth: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propHeight2: PropTypes.any,
  propDisplay: PropTypes.any,
};

export default ResultItem;
