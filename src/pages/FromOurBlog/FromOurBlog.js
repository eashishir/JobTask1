import React from 'react';
import img from "../../image/Screenshot (152).png"
import img1 from "../../image/Screenshot (153).png"
import img2 from "../../image/Screenshot (154).png"
import { AiOutlineArrowRight } from 'react-icons/ai';

const FromOurBlog = () => {
    return (
        <div>
            <div className='text-center'>
                <h1 className=' text-4xl m-10 mt-5  font-extrabold'> FROM OUR BLOG</h1>

            </div>

            <div className='grid lg:grid-cols-3 sm:grid-cols-1 px-5 gap-5'>
                <div className="card w-96 bg-base-100 shadow-xl border border-amber-600">
                    <figure className="px-10 pt-10">
                        <img src={img} alt="Shoes" className="rounded-xl" />
                    </figure>

                    <div className="card-body  ">
                        <small className='text-left'>February 9, 2021</small>
                        <h2 className="card-title text-left text-blue-900 font-bold">Top Cryptocurrency Mining Hardware In 2021</h2>
                        <p className='text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                        <div className="card-actions px-10">
                            <button className="btn px-10  btn-warning rounded-3xl ">Read more</button>
                        </div>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img2} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body  ">
                        <small className='text-left'>February 9, 2021</small>
                        <h2 className="card-title text-left text-blue-900 font-bold">Top Cryptocurrency Mining Hardware In 2021</h2>
                        <p className='text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                        <div className="card-actions px-10">
                            <button className="btn px-10  btn-warning rounded-3xl ">Read more</button>
                        </div>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl">

                    <figure className="px-10 pt-10">
                        <img src={img1} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body  ">
                        <small className='text-left'>February 9, 2021</small>
                        <h2 className="card-title text-left text-blue-900 font-bold">Top Cryptocurrency Mining Hardware In 2021</h2>
                        <p className='text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                        <div className="card-actions px-10">
                            <button className="btn px-10  btn-warning rounded-3xl ">Read more</button>
                        </div>
                    </div>

                </div>


            </div>

            <div>
                <button className="btn px-10  m-10  btn-warning rounded-3xl ">view all produt  <AiOutlineArrowRight className=' m-4 text-2xl' /> </button>
            </div>
        </div>
    );
};

export default FromOurBlog;