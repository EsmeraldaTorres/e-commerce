import React,{useContext, useState} from "react";

import CartContext from "../Context/CartContext";
import PayContext from "../Context/PayContext";
import Button from "@restart/ui/esm/Button";
import "../Components/TableCart.styles.css"

const TableCart = ({name, id,imagen, price, quantity})=>{
  
  const { state,dispatch: dispatchCart } = useContext(CartContext);
  const { state: statePay,dispatch: dispatchPay } = useContext(PayContext);
  const [checkedState, setCheckedState] = useState(false)

  const handleCheckbox = ()=>{
    const totalProductPrice = quantity*price
    if (checkedState === false){
    setCheckedState(true)
    dispatchPay({type:"ADD_TO_PAY", 
    payload: {totalPrice:totalProductPrice,id,quantity,price,name}})
    } 
    else{
      setCheckedState(false)
      dispatchPay({type:"ADD_TO_PAY",
      payload:{totalPrice:totalProductPrice,id}})
    }
  }
    return(
    <>
    <tr>
    <td>{id}</td>
    <td>{name}</td>
    <td><img src={`http://localhost:1337${imagen}`} className="imagen-product" alt="product" /></td>
    <td>${price}</td> 
      <td className="text-center d-flex">
      {
      quantity === 1 ? 
      <div>
      <Button
      className="btn btn-light"
        onClick={() =>
          dispatchCart({
            type: "ADD_TO_CART",
            payload: {
              id: id,
              price:price
            }
        })
      }
      >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-square" viewBox="0 0 16 16">
        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
        </svg>
      </Button>
      <p>{quantity}</p>
      <Button
      className="btn btn-light"
      onClick={() =>
        dispatchCart({
          type: "REMOVE",
          payload: {
          id: id,
          price: price
          }
        })
      }
      >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
      <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
      </svg>
      </Button> 
      </div>
      : 

    <div>
      <Button
      className="btn btn-light"
        onClick={() =>
          dispatchCart({
            type: "ADD_TO_CART",
            payload: {
              id: id,
              price: price
            }
        })
      }
      >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-square" viewBox="0 0 16 16">
        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
        </svg>
      </Button>
      <p>{quantity}</p>
      <Button
      className="btn btn-light"
      onClick={() =>
        dispatchCart({
          type: "REST",
          payload: {
            id: id,
            price: price
          }
        })
      }
      >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-square" viewBox="0 0 16 16">
      <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
      <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
      </svg>
      </Button>
      </div> 
        }
      </td>
      <td>
      <div class="input-group mb-3">
        <input onChange={handleCheckbox} value={quantity} type="checkbox" 
        checked={checkedState} aria-label="Checkbox for following text input"/>
      </div>
      </td>
      <td>
        $ {price * quantity}
      </td>
    </tr>
    </>
    )
}

export default TableCart