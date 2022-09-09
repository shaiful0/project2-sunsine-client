import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch('https://nameless-retreat-54411.herokuapp.com/reviews')
      .then(res => res.json())
      .then(data => setReviews(data))
  }, [])
  return (
    <div>
      <h1 className='text-center text-4xl mb-5 font-bold'>Reviews</h1>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
        {
          reviews.slice(0, 6).map(review => <Review
            key={review._id}
            review={review}
          ></Review>)
        }
      </div>
    </div>
  );
};

export default Reviews;