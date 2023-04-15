import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//functions
import { shorten, isInCart, quantityCount } from '../../helper/functions';

//context
import { CartContext } from '../../context/CartContextProvider';

//icons
import trashIcon from '../../asset/icons/trash.svg';

//style
import styles from './Product.module.css';

const Product = ({productData}) => {

    const {state, dispatch} = useContext(CartContext);

    return (
        <div className={styles.container}>
            <img src={productData.image} alt="product" className={styles.cardImage} />
            <div>
                <h3>{shorten(productData.title)}</h3>
                <p>{productData.price}</p>
                <div className={styles.linkContainer}>
                    <Link to={`/product/${productData.id}`}>details</Link>
                    <div className={styles.buttonContainer}>
                        
                        {quantityCount(state, productData.id) > 1 && 
                            <button onClick={() => dispatch({type: "DECREASE", payload: productData})} className={styles.smallButton}>-</button> }
                        {quantityCount(state, productData.id) === 1 &&
                            <button onClick={() => dispatch({type: "REMOVE_ITEM", payload: productData})} className={styles.smallButton}>
                             <img src={trashIcon} alt='trash'/>
                            </button>}
                        {quantityCount(state, productData.id) > 0 && <span className={styles.counter}>{quantityCount(state, productData.id)}</span>}

                        {
                        isInCart(state, productData.id) ? 
                        <button onClick={() => dispatch({type: "INCREASE", payload: productData})} className={styles.smallButton}>+</button> :
                        <button onClick={() => dispatch({type: "ADD_ITEM", payload: productData})} >add to cart</button>
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Product;