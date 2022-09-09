import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Tool from './Tool';

const Tools = () => {
  const [tools, setTools] = useState([]);
  useEffect(() => {
    fetch('https://nameless-retreat-54411.herokuapp.com/tools')
      .then(res => res.json())
      .then(data => setTools(data))
  }, [])
  return (
    <div>
      <h1 className='text-5xl font-bold text-center'>Our Tools</h1>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 bg-stone-100 mx-5'>
        {
          tools.slice(0, 6).map(tool => <Tool
            key={tool._id}
            tool={tool}
          ></Tool>)
        }
      </div>
      <div className='text-center'>
        <button className='btn btn-accent m-3' ><span className='text-center'>show all Tools</span></button>
      </div>
    </div>
  );
};

export default Tools;