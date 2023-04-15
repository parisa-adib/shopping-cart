import React, { useContext } from 'react';

//context
import { CartContext } from '../../context/CartContextProvider';

//icon
import basketIcon from '../../asset/icons/shopping-basket.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const {state} = useContext(CartContext)
    return (
        <div className='fixed w-full shadow-lg top-0 mt-0 mx-0 mb-44 bg-white'>
            <div className='flex justify-between items-center h-14 px-44 py-8'>
                <Link to='/product' className='text-[#1a73e8] font-bold hover:text-[#0b499b]'>Products</Link>
                <div className='relative'>
                    <Link to='/Cart' ><img src={basketIcon} alt='shop' /></Link>
                    <span className='absolute top-0 right-0 bg-[#0b499b] rounded-full text-white w-4 h-4 text-center font-bold text-xs'>{state.itemsCounter}</span>
                </div>
            </div>
            
        </div>
    );
};

export default Navbar;