import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';

const SecondPart = () => {
    return (
        <div>
            <div className='grid lg:grid-cols-4 sm:grid-cols-1 gap-9'>
                <div className=" border-2 border-amber-600 card w-80 bg-base-100 shadow-xl">
                    <figure><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX8IAqRFbF8w0VH0A4AzttV_z4B3nWvOFaHq5FnVLPukQrPz4X3Y0M2a-Ua9Hvst_GRjk&usqp=CAU' className=' h-80 w-65' alt="Shoes" /></figure>
                    <h3 className='text-blue-900 font-extrabold'>Bitmain Antminer D9 1.77Th/s Dash Miner</h3>
                    <div className="">
                        <button className=" mb-2 btn  btn-sm btn-warning rounded-xl ">View Product <br /> <AiOutlineShoppingCart></AiOutlineShoppingCart> </button>


                    </div>
                </div>
                <div className=" card w-80 bg-base-100 shadow-xl">
                    <figure><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX8IAqRFbF8w0VH0A4AzttV_z4B3nWvOFaHq5FnVLPukQrPz4X3Y0M2a-Ua9Hvst_GRjk&usqp=CAU' className=' h-80 w-65' alt="Shoes" /></figure>
                    <h3 className='text-blue-900 font-extrabold'>Bitmain Antminer D9 1.77Th/s Dash Miner</h3>
                    <div className="">
                        <button className="btn  btn-sm btn-ghost border-amber-600 gap-4">US$ 4,000.00</button>


                    </div>
                </div>
                <div className=" border-2 card w-80 bg-base-100 shadow-xl">
                    <figure><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX8IAqRFbF8w0VH0A4AzttV_z4B3nWvOFaHq5FnVLPukQrPz4X3Y0M2a-Ua9Hvst_GRjk&usqp=CAU' className=' h-80 w-65' alt="Shoes" /></figure>
                    <h3 className='text-blue-900 font-extrabold'>Bitmain Antminer D9 1.77Th/s Dash Miner</h3>
                    <div className="">
                        <button className="btn  btn-sm btn-ghost border-amber-600 gap-4">US$ 4,000.00</button>


                    </div>
                </div>
                <div className=" card w-80 bg-base-100 shadow-xl">
                    <figure><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX8IAqRFbF8w0VH0A4AzttV_z4B3nWvOFaHq5FnVLPukQrPz4X3Y0M2a-Ua9Hvst_GRjk&usqp=CAU' className=' h-80 w-65' alt="Shoes" /></figure>
                    <h3 className='text-blue-900 font-extrabold'>Bitmain Antminer D9 1.77Th/s Dash Miner</h3>
                    <div className="">
                        <button className="btn  btn-sm btn-ghost border-amber-600 gap-4">US$ 4,000.00</button>


                    </div>
                </div>


            </div>

            <div>
                <button className="btn px-10  m-10  btn-warning rounded-3xl ">view all product  <AiOutlineArrowRight className=' m-4 text-2xl' /> </button>
            </div>

        </div>

    );
};

export default SecondPart;