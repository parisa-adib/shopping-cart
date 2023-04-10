import React, { useReducer, createContext } from 'react';

const initialState = {
    selectedItems: [],
    itemsCounter: 0,
    total: 0,
    checkOut: false
}

const cartReducer = (state, action) => {
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
                selectedItems: [...state.selectedItems]
            }
        case "REMOVE_ITEM":
            const newSelectedItems = state.selectedItems.filter(item => item.id !== action.payload.id);
            return{
                ...state,
                selectedItems: [...newSelectedItems] //update selectedItems with new array
            }
        case "INCREASE": //add
            const indexI = state.selectedItems.findIndex(item => item.id === action.payload.id);
            state.selectedItems[indexI].quantity++;
            return{
                ...state,
            }
        case "DECREASE": //reduce
            const indexD = state.selectedItems.findIndex(item => item.id === action.payload.id);
            state.selectedItems[indexD].quantity--;
            return{
                ...state,
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