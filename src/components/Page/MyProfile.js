import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const MyProfile = () => {
  const [{displayName, email, photoURL}] = useAuthState(auth);
  return (
    <div class="card lg:card-side bg-base-100 shadow-xl">
    <figure><img src={photoURL} alt="Album"/></figure>
    <div class="card-body">
      <h2 class="card-title" className='text-2xl font-bold'>Name: {displayName}</h2>
      <h1 className='text-2xl font-bold'><span className='text-2xl font-bold'>Email</span>: {email}</h1>
      <div class="card-actions justify-end">
        <Link to='/updateprofile' class="btn btn-accent">update Profile</Link>
      </div>
    </div>
  </div>
  );
};

export default MyProfile;