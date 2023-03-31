import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';

const ImgNews = () => {
    return (
        <div>
            <div className="  lg:flex py-20 px-5 w-full bg-orange-700">
                <div className=" px-10">
                    <h1 className='text-white text-3xl font-extrabold '>Sign up for our exclusive email newsletter</h1>
                </div>
                <div >
                    <div className="form-control px-40">
                        <input type="text" placeholder="Email Address" className="px-10 input input-bordered border rounded-3xl" />
                    </div>

                </div>
                <div className='px-5'>

                    <button className="btn  btn-warning rounded-3xl ">submit  <AiOutlineArrowRight className=' m-4 text-1xl' /> </button>
                </div>
            </div>
        </div>
    );
};

export default ImgNews;