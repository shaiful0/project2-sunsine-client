import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import { async } from '@firebase/util';
import axios from 'axios';

const MyReview = () => {
  const [user] = useAuthState(auth);
  const { displayName: name, photoURL: img } = user
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();



  const onSubmit = async (data) => {

    const { description: message } = data;
    const review = {
      name,
      img,
      message,
    };
    console.log(review);
    try {
      const response = await axios.post(
        "https://nameless-retreat-54411.herokuapp.com/reviews",
        review
      );
      if (response.data.insertedId) {
        reset();
      }
    }
    catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='flex justify-center'>
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body items-center text-center">
          <h2 class="card-title">{user.displayName}</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <textarea type="text" placeholder="Type here message" class="input input-bordered input-accent w-full max-w-xs"
              {...register('description', {
                required: {
                  value: true,
                  message: 'Description is required'
                }
              })}
            />
            <input className='btn' type="submit" value='submit' />
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyReview;