import React from 'react';

const Banner = () => {
  return (
    <div class="hero w-full h-screen" style={{
      backgroundImage: `url("https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=600")`

    }}>
      <div class="hero-overlay bg-opacity-80"></div>
      <div class="text-white">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img style={{width:800, height:300}} src="https://images.pexels.com/photos/162534/grinder-hitachi-power-tool-flexible-162534.jpeg?auto=compress&cs=tinysrgb&w=600" class="max-w-sm rounded-lg shadow-2xl ml-5" />
          <div>
            <h1 class="text-5xl font-bold">Bulding New Tools</h1>
            <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button class="btn btn-accent text-white btn-outline">Learn more</button>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Banner;