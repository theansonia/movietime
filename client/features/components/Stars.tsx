import { FunctionComponent } from 'react';
import { useState } from 'react';

export interface StarProps {
  rating: number;
  reviews: number;
}

const Stars: FunctionComponent<StarProps> = ({
  rating,
  reviews,
}: StarProps) => {
  const [stars] = useState(Array(rating).fill(''));
  const [blankStars] = useState(Array(5 - rating).fill(''));

  return (
    <div className='stars'>
      {stars.map((curr, key) => (
        <svg
          key={`starkey-${key}`}
          id='star'
          xmlns='http://www.w3.org/2000/svg'
          width='18'
          height='18'
          viewBox='0 0 24 24'
        >
          <path
            id='blackstars'
            d='M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z'
            fill='black'
          />
        </svg>
      ))}
      {blankStars.map((curr, i) => (
        <svg
          key={`blankstarskey-${i}`}
          id='star'
          width='18'
          height='18'
          xmlns='http://www.w3.org/2000/svg'
          fillRule='evenodd'
          clipRule='evenodd'
          viewBox='0 0 24 24'
        >
          <path
            id='blankstars'
            d='M15.668 8.626l8.332 1.159-6.065 5.874 1.48 8.341-7.416-3.997-7.416 3.997 1.481-8.341-6.064-5.874 8.331-1.159 3.668-7.626 3.669 7.626zm-6.67.925l-6.818.948 4.963 4.807-1.212 6.825 6.068-3.271 6.069 3.271-1.212-6.826 4.964-4.806-6.819-.948-3.002-6.241-3.001 6.241z'
            fill='#212529;'
          />
        </svg>
      ))}
      <span id='reviews'> {reviews} reviews</span>{' '}
    </div>
  );
};

export default Stars;
