import React from 'react';


const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="text-2xl text-red-500 font-extrabold px-16">CRYPTO <span className="text-black">GURU DEALS</span> </a>
                    <div >
                        <ul className="menu menu-horizontal flex font-extrabold  justify-center pl-10">
                            <li><a>Home</a></li>
                            <li><a>Shop</a></li>
                            <li><a>Who we are</a></li>
                            <li><a>FAQS</a></li>
                            <li><a>blog</a></li>


                            <li><a>Contract us</a></li>


                        </ul>
                    </div>
                    <div>
                    <img src="https://img.freepik.com/premium-vector/original-american-flag-is-white-background_231786-4813.jpg?w=2000" className='h-5 w-8  text-center' alt="" />
                    </div>
                    <div>
                        
                        <ul className="menu menu-horizontal flex font-extrabold  justify-center ">
                            <li><a>Us</a></li>

                        </ul>
                    </div>
                    <div className='pl-10' >

                        <button className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            <span className="badge badge-sm indicator-item">8</span>
                        </div>
                       

                    </div>
                    <div className='px-10 gap-5'>
                    <button className="btn  btn-sm btn-ghost border-black gap-4">Login</button> 
                   
                    </div>
                    <div>
                    <button className="btn  btn-sm btn-warning ">Signup</button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Navbar;