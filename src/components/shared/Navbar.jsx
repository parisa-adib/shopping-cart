import React, { useContext } from 'react';

//context
import { CartContext } from '../../context/CartContextProvider';

const Navbar = () => {
    const {state} = useContext(CartContext)
    return (
        <div>
            
        </div>
    );
};

export default Navbar;