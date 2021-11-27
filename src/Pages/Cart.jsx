import React,{useContext} from "react";
import { Link } from "react-router-dom";
import CartContext from "../Context/CartContext";
import PayContext from "../Context/PayContext";
import "./Cart.styles.css"

import { Table, Button } from "react-bootstrap";
import TableCart from "../Components/TableCart";


const Cart = ()=>{
const { state } = useContext(CartContext);
const { state: statePay} = useContext(PayContext);
console.log("cart:")
console.log(state?.cart)

    return (
      <>
        <div className="container">
        {state?.cart?.length > 0 ? (
        <Table>
          <thead>
            <tr>
              <th>code</th>
              <th>Product Name</th>
              <th>Product Image</th>
              <th>Product</th>
              <th>Actions</th>
              <th>Select</th>
              <th>Total Price</th>
            </tr>
          </thead>    
          <tbody>
            { 
             state.cart.map((item, id)=>(
            <TableCart
            id={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            quantity={item.quantity}
            imagen={item.imagen}
            /> 
             ))} 
            <tr>
              <td>Total: ${statePay.totalPrice}</td>
              <td>
                <Link to="/pay"><Button>
                Go to Pay
                </Button>
                </Link>
              </td>
            </tr>       
          </tbody>
        </Table>
      ) : (
        <div className="d-flex justify-content-center content ">
          <Link to="/" className="empty-cart text-dark m-auto">Your cart is empty. Let's shopping!</Link>
        </div>

        )}
      
      </div>
      </>
    )
}

export default Cart
