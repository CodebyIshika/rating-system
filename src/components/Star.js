import React from 'react';
import { FaStar } from 'react-icons/fa';

const Star = ({ index, rating, onClick }) => {
  const color = index <= rating ? "#ffc107" : "#e4e5e9";

  const handleClick = () => {
    onClick(index);
  };

  return (
    <FaStar
      className="star"
      color={color}
      onClick={handleClick}
    />
  );
};

export default Star;
