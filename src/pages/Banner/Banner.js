import React from 'react';
import './Banner.css';
import bg from '../../image/bg.png'
const Banner = () => {
  return (
    <div>
      <div className='banner'>
        <div className='grid lg:grid-cols-2  sm:grid-cols-1 md:grid-cols-1 place-content-center'>
          <div className='mt-20 mr-20 ml-20'>
            <h2 className='text-5xl font-bold banner-text mt-11'>Start <span>Mining</span> Today!</h2>
            <p className='text-left  mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, neque nostrum mollitia perspiciatis enim nulla consequatur ea sit quibusdam, rem aut tempore. Similique, quidem a.</p>
            <button class="btn btn-outline   btn-primary mt-11 start">
              Buy Miners
            </button>
          </div>
          <div className='mt-10 mr-20 ml-20 '>
            <img src={bg} alt="" />

          </div>

          <div>


          </div>
        </div>
      </div>

    </div>
  );
};

export default Banner;