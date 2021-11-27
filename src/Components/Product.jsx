import React, { useContext, useEffect, useState } from "react";

//Context
import CartContext from "../Context/CartContext";
// styles
import { Card, Button } from "react-bootstrap";

const Product = ({ name, description, price, id, imagen })=>{
 
  const { dispatch} = useContext(CartContext);  
  const [payload, setPayload] = useState({});

  useEffect(() => {
    setPayload({
      name,
      description,
      price,
      id,
      imagen
    });
  }, [name, description, price, id, imagen, ]);

  const handleDispatch = payload => {
    dispatch({ type: "ADD_TO_CART", payload });
  };

  return(
    <Card className="m-3 d-flex flex-column justify-content-between"style={{ width: '17rem', padding:'3px' }}>
      <Card.Img variant="top" src={imagen}  />
      <Card.Body className="d-flex flex-column justify-content-end">
        <Card.Title>{name}</Card.Title>
        <div className="d-flex justify-content-between 
        align-items-end">
        <span>${price}</span>
        <Button 
        onClick={() =>
          handleDispatch({ ...payload })
        }
        variant="btn btn-outline-dark"
        data-toggle="button">
          Add to Cart
        </Button>
        </div>         
      </Card.Body>
    </Card>
  )
}

export default Product