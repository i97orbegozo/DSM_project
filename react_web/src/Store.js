import {createStore} from 'redux';

const reducer = (state, action) => {
    if(action.type === "ADD_TO_CART"){
        return{
            ...state,
            cart: action.cart,
            totalPrice: action.totalPrice
        }
    }
    if( action.type === "DEL_FROM_CART"){
        return{
            ...state,
            cart: action.cart,
            totalPrice: action.totalPrice
        }
    }
    if( action.type === "CHECKOUT"){
        return{
            ...state,
            cart: action.cart,
            totalPrice: action.totalPrice
        }
    }
    return state;
}

export default createStore(reducer, { cart: []});