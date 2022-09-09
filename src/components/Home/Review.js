import React from 'react';

const Review = ({ review }) => {
  const { name, img, message } = review;
  return (
    <div>
      <div class="card w-96 bg-base-100 shadow-2xl m-2 mx-10">
        <div class="avatar justify-center">
          <div class="w-24 mt-3 rounded-full">
            <img src={img} />
          </div>
        </div>
        <div class="card-body items-center text-center">
          <h2 class="card-title">{name}</h2>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;