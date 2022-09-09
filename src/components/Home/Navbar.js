import React from 'react';
import { Link } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Navbar = () => {
  const [user] = useAuthState(auth);
  const handleSingOut = () =>{
    signOut(auth)
  }
  return (
    <div class="navbar bg-stone-600">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='blogs'>Blogs</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li><Link to='/login'>Login</Link></li>
          </ul>
        </div>
        <Link to='/' class="btn btn-ghost normal-case text-3xl text-white"> <span className=' text-orange-500 font-serif text-5xl'>M</span>Tools</Link>
      </div>
      <div class="navbar-end hidden lg:flex">
        <ul class="menu menu-horizontal p-0 text-white">
          <button class="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>
          <li><Link to='/'>Home</Link></li>
          <li><a>About</a></li>
          {
            user && <>
            <li><Link to='/dashboard'>Dashboard</Link></li>
            </>
          }
          <li><a>Blogs</a></li>
          <li><a>Contact</a></li>
          <li>{user? <button onClick={handleSingOut}>signOut</button> : <Link to='/login'>Login</Link>}</li>
        </ul>
      </div>

    </div>
  );
};

export default Navbar;