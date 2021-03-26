/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const Stars = ( {rating, reviews} ) => {
  
  const [stars, updateStars] = useState(Array(rating).fill(''));
  const [blankStars, updateBlankStars] = useState(Array(5 - rating).fill(''));


    return (
      <div className="container">
      <div className="stars">
          {
              stars.map((curr, key) => (
                <img key={key} id='star' alt='filled review star' src="https://img.icons8.com/ios-filled/26/000000/star--v1.png"/>
              ))
          }
          {
            blankStars.map((curr, i) => 
            <img key={i} id='star' alt='unfilled review star' src="https://img.icons8.com/ios/26/000000/star--v1.png"/>)
          }
          <span> {reviews}</span> reviews
      </div>
  </div>
    );
}

export default Stars;