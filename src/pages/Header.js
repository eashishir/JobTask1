import React from 'react';


const Header = () => {

    const menuItems = <>
        <li><a className='font-extrabold' to='/'>Home</a></li>
        <li><a className='font-extrabold' to='/blog'>Shope</a></li>
        <li><a className='font-extrabold' to='/register'>Who we are</a></li>
        <li><a className='font-extrabold' to='/register'>FAQS</a></li>
        <li><a className='font-extrabold' to='/register'>blog</a></li>
        <li><a className='font-extrabold' to='/register'>Contract us</a></li>
        <div className='mt-3 pl-2'>
            <img src="https://img.freepik.com/premium-vector/original-american-flag-is-white-background_231786-4813.jpg?w=2000" className='h-5 w-8  text-center' alt="" />
        </div>
        <li><a className='font-extrabold' to='/register'>us</a></li>
        <button className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </button>
        <div className="indicator">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            <span className="badge badge-sm indicator-item mt-3">8</span>
        </div>
        <div className='lg:pl-12 gap-5'>
            <button className="m-2 btn  btn-sm btn-ghost border-black gap-4">Login</button>

        </div>
        <div >
            <button className="btn m-2  btn-sm btn-warning ">Signup</button>
        </div>











    </>
    return (
        <div className="navbar h-20 mb-12 pt-12     bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="text-dark menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <a className="text-2xl text-orange-600 font-extrabold px-12">CRYPTO <span className="text-black">GURU DEALS</span> </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}

                </ul>
            </div>
            <div className="navbar-end">






            </div>
        </div>
    );
};

export default Header;