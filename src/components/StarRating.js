import React, { useState } from 'react';
import Star from './Star';

const StarRating = () => {
    const [rating, setRating] = useState(0);
    const ratingsWords = ['Poor', 'Fair', 'Good', 'Very Good', 'Excellent'];
  
    const handleStarClick = (index) => {
      setRating(index);
    };
  
    return (
      <div className="star-rating">
        <div className='stars'>
        {[1, 2, 3, 4, 5].map((index) => (
          <Star
            key={index}
            index={index}
            rating={rating}
            onClick={handleStarClick}
          />
        ))}
        </div>
        <div className="message">{ratingsWords[rating - 1]}</div>
      </div>
    );
  };

export default StarRating;
