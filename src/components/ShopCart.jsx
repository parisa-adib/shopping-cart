import React, { useContext } from 'react';

//component
import Cart from './shared/Cart';

//context
import { CartContext } from '../context/CartContextProvider'; 
import { Link } from 'react-router-dom';

//style
import styles from "./ShopCart.module.css";

const ShopCart = () => {
    const {state, dispatch } = useContext(CartContext);
    return (
        <div className={styles.container}>
            <div className={styles.cartContainer}>
                {state.selectedItems.map(item => <Cart key={item.id} data={item} />)}
            </div>
            {
                state.itemsCounter > 0 && <div className={styles.payments}>
                    <p ><span>total Items:</span>{state.itemsCounter}</p>
                    <p ><span>total peyments:</span>{state.total}</p>
                    <div className={styles.buttonContainer}>
                        <button onClick={() => dispatch({type:"CHECKOUT"})} className={styles.checkout}>check Out</button>
                        <button onClick={() => dispatch({type:"CLEAR"})} className={styles.clear}>clear</button>
                    </div>
                </div>
            }

            {
                state.checkOut && <div className={styles.complete}>
                    <h3>checked out Successfully</h3>
                    <Link to="/product">Buy more</Link>
                </div>
            }

            {
                !state.checkOut && state.itemsCounter === 0 && <div className={styles.complete}>
                    <h3>want to buy?</h3>
                    <Link to="/product">go to shop</Link>
                </div>
            }
        </div>
    );
};

export default ShopCart;