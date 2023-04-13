import React, { useContext } from 'react';

//context
import { CartContext } from '../../context/CartContextProvider';

//functions
import { shorten } from '../../helper/functions';

//icon
import trashIcon from '../../asset/icons/trash.svg';

const Cart = (props) => {
    const { dispatch } = useContext(CartContext);
    const { image, title, quantity, price } = props.data;
    return (
        <div>
            <img src={image} alt='image' />
            <div>
                <h3>{shorten(title)}</h3>
                <p>{price} $</p>
                <div>
                    <span>{quantity}</span>
                </div>
                <div>
                    {
                        quantity > 1 ? 
                        <button onClick={() => dispatch({type: "DECREASE" , payload: props.data})}>-</button> :
                        <button onClick={() => dispatch({type: "REMOVE_ITEM" , payload: props.data})}><img src={trashIcon} alt='trash' style={{width:"20px"}} /></button>
                    }
                    <button onClick={() => dispatch({type: "INCREASE", payload: props.data})}>+</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;