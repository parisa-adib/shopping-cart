import React, { useContext } from 'react';
//component
import Product from './shared/Product';
//context
import { ProductContext } from '../context/ProductContextProvider';
//style
import styles from "./Store.module.css";

const Store = () => {
    const products = useContext(ProductContext)
    return (
        <div className={styles.container}>
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