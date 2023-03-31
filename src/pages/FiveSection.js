import React from 'react';

const FiveSection = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left px-12">
                        <h1 className="mt-24 text-7xl text-orange-700 font-extrabold">CRYPTO <br /> <span className="text-black">GURU DEALS</span> </h1>
                        <p className="py-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className='' >
                            <img src="https://assets-global.website-files.com/606f63778ec431ec1b930f1f/63486c1062e4267a7a84d570_rodion-kutsaiev-9odES-X2Sj0-unsplash.jpg" className=" h-96 rounded-lg " />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FiveSection;