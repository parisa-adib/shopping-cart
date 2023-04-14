import React, { useContext } from 'react';

//component
import Cart from './shared/Cart';

//context
import { CartContext } from '../context/CartContextProvider'; 
import { Link } from 'react-router-dom';

const ShopCart = () => {
    const {state, dispatch } = useContext(CartContext);
    return (
        <div>
            <div>
                {state.selectedItems.map(item => <Cart key={item.id} data={item} />)}
            </div>
            {
                state.itemsCounter > 0 && <div>
                    <p><span>total Items:</span>{state.itemsCounter}</p>
                    <p><span>total peyments:</span>{state.total}</p>
                    <div>
                        <button onClick={() => dispatch({type:"CHECKOUT"})}>check Out</button>
                        <button onClick={() => dispatch({type:"CLEAR"})}>clear</button>
                    </div>
                </div>
            }

            {
                state.checkOut && <div>
                    <h3>checked out Successfully</h3>
                    <Link to="/product">Buy more</Link>
                </div>
            }

            {
                !state.checkOut && state.itemsCounter === 0 && <div>
                    <h3>want to buy?</h3>
                    <Link to="/product">go to shop</Link>
                </div>
            }
        </div>
    );
};

export default ShopCart;