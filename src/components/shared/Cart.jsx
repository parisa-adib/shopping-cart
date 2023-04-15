import React, { useContext } from 'react';

//context
import { CartContext } from '../../context/CartContextProvider';

//functions
import { shorten } from '../../helper/functions';

//icon
import trashIcon from '../../asset/icons/trash.svg';

//style
import styles from './Cart.module.css';

const Cart = (props) => {
    const { dispatch } = useContext(CartContext);
    const { image, title, quantity, price } = props.data;
    return (
        <div className={styles.container}>
            <img src={image} alt='image' className={styles.productImage}/>
            <div className={styles.data}>
                <h3>{shorten(title)}</h3>
                <p>{price} $</p>
                <div>
                    <span className={styles.quantity}>{quantity}</span>
                </div>
                <div className={styles.buttonContainer}>
                    {
                        quantity > 1 ? 
                        <button onClick={() => dispatch({type: "DECREASE" , payload: props.data})} >-</button> :
                        <button onClick={() => dispatch({type: "REMOVE_ITEM" , payload: props.data})}><img src={trashIcon} alt='trash' className='w-5' /></button>
                    }
                    <button onClick={() => dispatch({type: "INCREASE", payload: props.data})}>+</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;