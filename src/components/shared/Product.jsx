import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//functions
import { shorten, isInCart, quantityCount } from '../../helper/functions';

//context
import { CartContext } from '../../context/CartContextProvider';

//icons
import trashIcon from '../../asset/icons/trash.svg';

const Product = ({productData}) => {

    const {state, dispatch} = useContext(CartContext);

    return (
        <div className='mt-5 border-opacity-20 border border-gray-500 rounded-md shadow-md shadow-gray-300'>
            <img src={productData.image} alt="product" className='w-52 h-48' />
            <div className='p-4'>
                <h3 className='text-lg font-medium font-sans'>{shorten(productData.title)}</h3>
                <p className='text-lg'>{productData.price}</p>
                <div>
                    <Link to={`/product/${productData.id}`}>details</Link>
                    <div>
                        {
                            isInCart(state, productData.id) ? 
                            <button onClick={() => dispatch({type: "INCREASE", payload: productData})}>+</button> :
                            <button onClick={() => dispatch({type: "ADD_ITEM", payload: productData})}>add to cart</button>
                        }
                        {quantityCount(state, productData.id) > 1 && 
                            <button onClick={() => dispatch({type: "DECREASE", payload: productData})}>-</button> }
                        {quantityCount(state, productData.id) === 1 &&
                            <button onClick={() => dispatch({type: "REMOVE_ITEM", payload: productData})}>
                             <img src={trashIcon} alt='trash' style={{width:"20px"}}/>
                            </button>}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Product;