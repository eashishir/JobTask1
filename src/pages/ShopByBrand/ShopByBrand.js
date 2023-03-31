import React from 'react';
import img from "../../image/microbt-whatsminer-m30s (1).png"
import { AiFillRightCircle, AiFillLeftCircle } from 'react-icons/ai';
import SecondPart from './SecondPart';
import More from './More';

const ShopByBrand = () => {
    return (

        <div  >
            <div className='text-center'>
                <h1 className=' text-4xl m-5  font-extrabold'>SHOP BY BRAND  </h1>
             
            </div>
            <div className='flex gap-4 '>
                <div className='mt-20 text-6xl text-amber-600'>
                    <AiFillLeftCircle />
                </div>
                <div className=" border-2 border-amber-600 card w-80 bg-base-100 shadow-xl">
                    <figure><img src={img} className=' h-80 w-65' alt="Shoes" /></figure>
                    <div className="">
                        <h2 className="">Bitmain</h2>


                    </div>
                </div>
                <div className=" border-2 border-amber-600 card w-80 bg-base-100 shadow-xl">
                    <figure><img src="https://ae01.alicdn.com/kf/S54d48612a4824d43bb2f6db567cc28b9s/Refurbish-Bitcoin-Miner-AntMiner-T15-23T-with-PSU-Better-Than-BITMAIN-S9-S9i-S9j-Z9-Mini.jpg_Q90.jpg_.web" className=' h-80 w-65' alt="Shoes" /></figure>
                    <div className="">
                        <h2 className="">Ipollo</h2>


                    </div>
                </div>
                <div className=" border-2 border-amber-600 card w-80 bg-base-100 shadow-xl">
                    <figure><img src="https://ae01.alicdn.com/kf/S54d48612a4824d43bb2f6db567cc28b9s/Refurbish-Bitcoin-Miner-AntMiner-T15-23T-with-PSU-Better-Than-BITMAIN-S9-S9i-S9j-Z9-Mini.jpg_Q90.jpg_.web" className=' h-80 w-65' alt="Shoes" /></figure>
                    <div className="">
                        <h2 className="">Goldshell</h2>


                    </div>
                </div>
                <div className=" border-2 border-amber-600 card w-80 bg-base-100 shadow-xl">
                    <figure><img src="https://ae01.alicdn.com/kf/S54d48612a4824d43bb2f6db567cc28b9s/Refurbish-Bitcoin-Miner-AntMiner-T15-23T-with-PSU-Better-Than-BITMAIN-S9-S9i-S9j-Z9-Mini.jpg_Q90.jpg_.web" className=' h-80 w-65' alt="Shoes" /></figure>
                    <div className="">
                        <h2 className="">Jasminer</h2>


                    </div>
                </div>
                <div className=" border-2 border-amber-600 card w-80 bg-base-100 shadow-xl">
                    <figure><img src="https://ae01.alicdn.com/kf/S54d48612a4824d43bb2f6db567cc28b9s/Refurbish-Bitcoin-Miner-AntMiner-T15-23T-with-PSU-Better-Than-BITMAIN-S9-S9i-S9j-Z9-Mini.jpg_Q90.jpg_.web" className=' h-80 w-65' alt="Shoes" /></figure>
                    <div className="">
                        <h2 className="">ibeLink</h2>


                    </div>
                </div>
                <div className=" border-2 border-amber-600 card w-80 bg-base-100 shadow-xl">
                    <figure><img src="https://ae01.alicdn.com/kf/S54d48612a4824d43bb2f6db567cc28b9s/Refurbish-Bitcoin-Miner-AntMiner-T15-23T-with-PSU-Better-Than-BITMAIN-S9-S9i-S9j-Z9-Mini.jpg_Q90.jpg_.web" className=' h-80 w-65' alt="Shoes" /></figure>
                    <div className="">
                        <h2 className="">Innosilicon</h2>


                    </div>
                </div>
                <div className='mt-20 text-6xl text-amber-600'>
                    <AiFillRightCircle />
                </div>
                


            </div>
           <div className='m-20 gap-4'>
           <SecondPart ></SecondPart>
           </div>
           <div className=' px-20 mt-20 gap-4'>
           <More></More>
           </div>
        </div>

    );
};

export default ShopByBrand;