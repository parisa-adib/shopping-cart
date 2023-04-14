import React, { useReducer, createContext } from 'react';
import Product from '../components/shared/Product';

const initialState = {
    selectedItems: [],
    itemsCounter: 0,
    total: 0,
    checkOut: false
}

const sumItems = items => {
    const itemsCounter = items.reduce((total, product) => total + product.quantity, 0)
    const total = items.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
    return {itemsCounter, total}
}

const cartReducer = (state, action) => {
    console.log(state);
    switch(action.type) {
        case "ADD_ITEM":  //add to cart for the FIRST TIME
            if(!state.selectedItems.find(item => item.id === action.payload.id)){
                state.selectedItems.push({
                    ...action.payload,
                    quantity: 1
                })
            }
            return {
                ...state,
                selectedItems: [...state.selectedItems],
                ...sumItems(state.selectedItems),
                checkOut: false
            }
        case "REMOVE_ITEM":
            const newSelectedItems = state.selectedItems.filter(item => item.id !== action.payload.id);
            return{ 
                ...state,
                selectedItems: [...newSelectedItems], //update selectedItems with new array
                ...sumItems(state.selectedItems)
            }
        case "INCREASE": //add
            const indexI = state.selectedItems.findIndex(item => item.id === action.payload.id);
            state.selectedItems[indexI].quantity++;
            return{
                ...state,
                ...sumItems(state.selectedItems)
            }
        case "DECREASE": //reduce
            const indexD = state.selectedItems.findIndex(item => item.id === action.payload.id);
            state.selectedItems[indexD].quantity--;
            return{
                ...state,
                ...sumItems(state.selectedItems)
            }
        case "CLEAR": //clear the cart
            return{
                selectedItems:[],
                itemsCounter: 0,
                total: 0,
                checkOut: false
            }
        case "CHECKOUT":
            return{
                selectedItems:[],
                itemsCounter: 0,
                total: 0,
                checkOut: true
            }
        default:
            return state;
    }
}

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(cartReducer, initialState)
    return (
        <CartContext.Provider value={{state, dispatch}}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;