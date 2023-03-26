import React from 'react';
//functions
import { shorten } from '../helper/functions';

const Product = ({productData}) => {
    return (
        <div className='mt-5 border-opacity-20 border border-gray-500 rounded-md shadow-md shadow-gray-300'>
            <img src={productData.image} alt="product" className='w-52 h-48' />
            <div className='p-4'>
                <h3 className='text-lg font-medium font-sans'>{shorten(productData.title)}</h3>
                <p className='text-lg'>{productData.price}</p>
                <div>
                    <a href='#'>details</a>
                    <div>
                        <button className='bg-green-600 rounded-md text-white p-1'>
                            add to cart
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Product;