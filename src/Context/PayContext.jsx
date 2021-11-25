import React, {createContext, useReducer} from "react";

const PayContext = createContext()

const initialState = {
    totalPrice: 0,
    cart: []
}
console.log("initialState desde PAYCONTEX:")
console.log(initialState) 
const reducer = (state, action) => {
    switch(action.type){
        case "ADD_TO_PAY":
            const itemToPay = state.cart.find((item)=> item.id === action.payload.id)
            console.log("itemToPay")
            console.log(itemToPay)
            return itemToPay ? {
                ...state,
                totalPrice: state.totalPrice - action.payload.totalPrice,
                cart: state.cart.filter(item => item.id !== action.payload.id) 
            } :           
            {
                ...state,
                totalPrice: state.totalPrice + action.payload.totalPrice,
                cart:[...state.cart, action.payload]
            }
        default:
            return state
    }
}


const PayProvider = ({children}) => {
    const [state,dispatch] =useReducer(reducer, initialState)
    const data = {state, dispatch};
  
    return(
        <PayContext.Provider value={data}>{children}</PayContext.Provider>
    
    )
}

export default PayContext
export {PayProvider}