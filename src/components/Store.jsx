import React, { useContext } from 'react';
//component
import Product from './shared/Product';
//context
import { ProductContext } from '../context/ProductContextProvider';

const Store = () => {
    const products = useContext(ProductContext)
    return (
        <div className='flex flex-wrap justify-between mt-4'>
            {
            products.map(product => <Product 
                                        key={product.id} 
                                        productData={product} 
                                        />)
            }
        </div>
    );
};

export default Store;