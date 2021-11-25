import React,{useContext} from "react";
import {Link} from "react-router-dom";
// import CartContext from "../Context/CartContext";
import PayContext from "../Context/PayContext";
import {Table} from "react-bootstrap";
import TablePay from "../Components/TablePay";
import "../Components/TablePay.styles.css"
import PayMethod from "../Components/PayMethod"

const Pay= ()=>{
    // const { state, dispatch } = useContext(CartContext);
    const {state, dispatch} = useContext(PayContext)
    console.log("PAYCONTEXT STATE")
    console.log(state)
    return (
      <>
        <div className="container content">
        {state?.cart?.length > 0 ? (
        <Table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total Price</th>
            </tr>
          </thead>    
          <tbody>
            { 
             state.cart.map((item, id)=>(
            <TablePay
            id={item.id}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            /> 
             ))}       
          </tbody>
          <tfoot>
          <tr>
            <td>
            <label for="basic-url">Método de entrega</label>
            <div class="form-group p-2">
              <select id="inputState" class="form-control">
              <option selected>
                DHL (Entrega a Domicilio)
                Recibir por 11 - 16 de diciembre
              </option>
              <option>DHL Express (Entega a Domicilio)
                Llega mañana
              </option>
              <option>Recoger en tienda
              </option>
              </select>
            </div>
            </td>
            <td>
            <label for="basic-url">código de descuento</label>
              <div class="input-group mb-2">
              <input type="text" class="form-control" 
              id="basic-url" aria-describedby="basic-addon3"/>
              </div>
            </td>
            <td>
              <div className="d-flex row">
                <div className="col-6">
                  ¿Envolver para regalo?
                </div>
                <div className="col-6">
                <input  type="checkbox"/>
                </div>
              </div>
            </td>
            <td>Total: ${state.totalPrice}</td>
            </tr> 
          </tfoot>
        </Table>
      ) : null}
      <div className="container">
      <label for="basic-url">Adress</label>
        <div class="form-group p-2">
          <select id="inputState" class="form-control">
          <option selected>
            Col. Loma Linda, Isla de Elba 114 (predeterminada)
          </option>
          <option>Add Adress
          </option>
          </select>
        </div>
      </div>
      <div className="d-flex mt-3">
      <PayMethod/>  
      </div>
      <div className="d-flex mt-3 justify-content-center">
        <button>
          Realizar Pago
        </button>
      </div>    
      </div>
      </>
    )
}

export default Pay