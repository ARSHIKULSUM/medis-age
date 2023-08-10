


import React, { useState } from 'react';
import './Seat.css';

const Seat = ({ number, isGreenBorder, isGreyBorder }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div
      className={`seat ${isGreenBorder ? 'green-border' : ''} ${isGreyBorder ? 'grey-border' : ''} ${isClicked ? 'clicked' : ''}`}
      onClick={handleClick}
    >
      {number}
    </div>
  );
};

export default Seat;
