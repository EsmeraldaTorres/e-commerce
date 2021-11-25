import React, { useState } from "react";

const PayMethod = ()=>{
    const [payMethod,setPayMethod] = useState("Tarjeta")
    return(
      <>
        <div className="container">
          <div className="d-flex">
          <div>Método de Pago</div>
          <div>
            <button onClick={()=> setPayMethod("Tarjeta")}>Tarjeta débito/crédito</button>
            <button onClick={()=> setPayMethod("SPEI")}>SPEI</button>
            <button onClick={()=> setPayMethod("Depósito")}>Depósito tiendas de autoservicio</button>
          </div>
          </div>
          <div>
          {
            payMethod === "Tarjeta" ?  (
              <form action="">
               <div class="form-group">
                 <label for="numbercard">Number Card</label>
                 <input type="email" class="form-control" id="numbercard" aria-describedby="emailHelp" placeholder="Enter number card"/>
              </div>
               <div class="form-group mt-2">
                 <label for="name">Name in Card</label>
                 <input type="email" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter email"/>
               </div>
               <div class="form-group d-flex justify-content-between row mt-2">
                <div className="col-sm-6 row">
                  <label for="cvv" class="col-sm-2 col-form-label
                   d-flex align-items-center">CVV</label>
                  <div class="col-sm-10 d-flex align-items-center">
                  <input type="password" class="form-control" id="cvv"/>
                  </div>
                </div>
                <div className="col-sm-6 row">
                  <label for="c.p." class="col-sm-2 col-form-label">Due date</label>
                  <div class="col-sm-10 d-flex align-items-center">
                  <input type="password" class="form-control" id="c.p." placeholder="MM/YY"/>
                  </div>
                </div>
              </div>
              <div class="form-group">
                 <label for="adress">Adress</label>
                 <input type="email" class="form-control" id="adress" aria-describedby="emailHelp" placeholder="Calle/No.exterior"/>
               </div>
               <small id="numbercard" class="form-text text-muted">We'll never share your email with anyone else.</small>
              </form>
             ) : payMethod === "SPEI" ? (
              <div class="input-group d-flex justify-content-center m-3">
                <input  type="checkbox"  aria-label="Checkbox for following text input"/>
                <p>Sistema de Pagos Electrónicos Interbancarios (SPEI)</p>
              </div>
              ) : (
                <div class="input-group d-flex justify-content-center m-3">
                  <div className="p-3 d-flex"> 
                    <input  type="checkbox"  aria-label="Checkbox for following text input"/>
                    <p>OXXO</p>
                  </div>
                  <div className="p-3 d-flex">
                    <input  type="checkbox"  aria-label="Checkbox for following text input"/>
                    <p>7-Eleven</p>
                  </div>
                </div>
                
              )
          }
          </div>
        </div>
      </>
    )
}

export default PayMethod