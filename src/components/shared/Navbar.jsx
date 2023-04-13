import React, { useContext } from 'react';

//context
import { CartContext } from '../../context/CartContextProvider';

//icon
import basketIcon from '../../asset/icons/shopping-basket.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const {state} = useContext(CartContext)
    return (
        <div>
            <div>
                <Link to='/product'>Products</Link>
                <div>
                    <Link to='/Cart' ><img src={basketIcon} alt='shop' /></Link>
                    <span>{state.itemsCounter}</span>
                </div>
            </div>
            
        </div>
    );
};

export default Navbar;