import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({ tool }) => {
  const { _id, name, img, price, description, available_quantity, minimum_order_quantity} = tool;
  const navigate = useNavigate()
  const navigateToToolsDetail = id =>{
    navigate(`/tools/${id}`)
  }
  return (
    <div class="card w-96 bg-stone-100 shadow-2xl m-5 mx-10">
      <figure class="px-10 pt-10">
        <img style={{height:200 , width:200}} src={img} alt="Shoes" class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">{name}</h2>
        <p>{description}</p>
        <p>Price:${price}</p>
        <p>Available Quantity: {available_quantity}</p>
        <p>Minimum order Quantity: {minimum_order_quantity}</p>
        <div class="card-actions">
          <button onClick={() => navigateToToolsDetail(_id)} class="btn btn-accent btn-outline">Purchase Now</button>
        </div>
      </div>
    </div>
  );
};

export default Tool;