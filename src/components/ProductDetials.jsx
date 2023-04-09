import React, { useContext } from 'react';
//context
import { ProductContext } from '../context/ProductContextProvider';
import { Link } from 'react-router-dom';

const ProductDetials = (props) => {
    const id = props.match.params.id;
    const data = useContext(ProductContext);
    const product = data[id - 1];
    const { image, title, description, price, category } = product;
    return (
        <div>
           <img src={image} alt='productImg' />
           <div>
            <h3> {title} </h3>
            <p> {description} </p>
            <p> {category} </p>
            <div>
                 <span> {price} </span>
                 <Link to="/product">back to shop</Link>
            </div>
           </div>
        </div>
    );
};

export default ProductDetials;