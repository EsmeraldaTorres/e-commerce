import React, {createContext, useReducer} from "react";

const CartContext = createContext()

const initialState = {
    // totalPrice: 0,
    cart: []
}
console.log("initialState de CartContext:")
console.log(initialState) 
const reducer = (state, action) => {
    switch(action.type){
        // case "ADD_TO_PAY":
        //     console.log(action.payload)
        //     return {
        //         ...state,
        //         totalPrice: state.totalPrice + action.payload,
        //         cart:[...state.cart]
        //     }

        case "ADD_TO_CART":
            // encontramos un objeto en el arreglo cart que tenga el id = al 
            // que estoy seleccionando desde TableCart.jsx 
            const itemOnCart = state.cart.find((item)=> item.id === action.payload.id)
            // Si lo encuentra entonces le añade a su propieda quantity, mas 1
            // el precio total sigue en 0
            return itemOnCart ? {
                ...state,
                // totalPrice: state.totalPrice + itemOnCart.price,
                cart: state.cart.map(item=> item.id === action.payload.id ? {...item,
                quantity: item.quantity + 1}: item)
            } :
            // Si NO lo encuentra entonces le añade una propiedad quantity = 1
            // el precio total sigue en 0
                {...state,
                // totalPrice: state.totalPrice + action.payload.price,
                cart: [...state?.cart, {...action.payload, quantity: 1}],} 

        case "REST":
             const itemToDelete = state.cart.find(item=> item.id === action.payload.id)
            return itemToDelete?.quantity > 1 &&  
            {
              ...state,
            //   totalPrice: state.totalPrice - itemToDelete.price,
              cart: state.cart.map(item => 
                item.id === action.payload.id
                ?  {...item, quantity: item.quantity - 1} 
                :  item )
            } 
        case "REMOVE":
            return{
                ...state,
                totalPrice: state.totalPrice - action.payload.price,
                cart: state.cart.filter(item => item.id !== action.payload.id) 
            }
        default:
            return state
    }
}


const CartProvider = ({children}) => {
    const [state,dispatch] =useReducer(reducer, initialState)
    const data = {state, dispatch};
  
    return(
        <CartContext.Provider value={data}>{children}</CartContext.Provider>
    
    )
}

export default CartContext
export {CartProvider}