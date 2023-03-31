import React from 'react';
import { BiMessageAltCheck, BiMessageAltDots, BiPhoneCall } from 'react-icons/bi';
import { TfiHeadphoneAlt } from 'react-icons/tfi';

const Intuch = () => {
    return (
        <div>
            <div className='text-center m-10'>
                <h1 className=' text-4xl py-10   font-extrabold'>GET IN TOUCH WITH US </h1>

            </div>
            <div className="hero min-h-screen bg-base-100">
                <div className=" hero-content flex-col lg:flex-row-reverse">
                    <div className=" px-20 text-center lg:text-left">
                        <div className='flex'>
                            <BiMessageAltCheck className='mt-2 text-5xl text-orange-600' />
                            <h1 className="text-5xl font-bold">Email us</h1>

                        </div>
                        <p className='px-12'>deficoincapital@gmail.com</p>
                        <hr className=' m-5' />

                        
                        <div className='flex'>
                            <TfiHeadphoneAlt className='mt-2 text-4xl m-1 text-orange-600' />
                            <h1 className="text-5xl font-bold">Chat with an agent</h1>

                        </div>
                        <p className='px-12'>Lorem ipsum dolor sit amet,</p>
                        <hr className=' m-5' />



                        <div className='flex'>
                            <BiMessageAltDots className='mt-2 text-5xl text-orange-600' />
                            <h1 className="text-5xl font-bold">Whatsapp</h1>

                        </div>
                        <p className='px-12'>Lorem ipsum dolor sit amet,</p>
                        <hr className=' m-5' />

                        
                        <div className='flex'>
                            <BiPhoneCall className='mt-2 text-5xl text-orange-600' />
                            <h1 className="text-5xl font-bold">Call us</h1>

                        </div>



                        <p className='px-12'>+86-13530796464</p>
                        <hr className=' m-5' />

                     




                    </div>
                    <div className=" card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body ">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-2xl">Tell us about your inquiry and we’ll get back to you shortly.</span>
                                </label>

                                <label className="label">
                                    <span className="label-text font-extrabold">Company Name <span className='text-red-600'>*</span></span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                                <label className="label">
                                    <span className="label-text font-extrabold">Email <span className='text-red-600'>*</span></span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-extrabold">Message <span className='text-red-600'>*</span></span>
                                </label>
                                <input type="text" placeholder="Brief info about your inquiry." className="input input-bordered" />

                            </div>
                            <div className="form-control mt-6">
                                <button className="px-10 btn btn-warning rounded-3xl ">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Intuch;