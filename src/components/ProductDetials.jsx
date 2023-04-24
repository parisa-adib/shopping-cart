import React, { useContext } from 'react';
//context
import { ProductContext } from '../context/ProductContextProvider';
import { Link, useParams } from 'react-router-dom';

//style
import styles from "./ProductDetails.module.css";

const ProductDetials = (props) => {
    const params = useParams();
    const id = params.id;
    const data = useContext(ProductContext);
    const product = data[id - 1];
    const { image, title, description, price, category } = product;
    return (
        <div className={styles.container}>
           <img src={image} alt='productImg' className={styles.image} />
           <div className={styles.textContainer}>
            <h3> {title} </h3>
            <p className={styles.description}> {description} </p>
            <p className={styles.category}> {category} </p>
            <div className={styles.buttonContainer}>
                 <span className={styles.price}> {price} </span>
                 <Link to="/product">back to shop</Link>
            </div>
           </div>
        </div>
    );
};

export default ProductDetials;