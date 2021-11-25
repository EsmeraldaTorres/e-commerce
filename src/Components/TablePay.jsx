import React,{useContext, useState} from "react";

import CartContext from "../Context/CartContext";

const TablePay = ({name,price, quantity})=>{
  const { state,dispatch } = useContext(CartContext);
    return(
    <>
    <tr>
    <td>{name}</td>
    <td>${price}</td> 
    <td>{quantity}</td>
    <td> $ {price * quantity}</td>
    </tr>
    </>
    )
}

export default TablePay