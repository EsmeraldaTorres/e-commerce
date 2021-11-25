import React, { useContext } from "react";
// import { ListGroup } from "react-bootstrap";

// import Button from 'react-bootstrap/Button';
import ProductListContext from "../Context/ProductListContext";
// import Header from "../Custom/Header";
import Product from "../Components/Product";

const Home = ()=>{

    const {state:listState} = useContext(ProductListContext);

    return(
        <>
        <div className="container text-center">
            <h1>Kipling</h1>
            <div className="container ">
                <div className="row d-flex justify-content-around">
                {
                    listState && 
                    listState.products && 
                    listState.products.map(product => (
                        <Product
                        key={product.id}
                        name={product.name}
                        description={product.desc}
                        price={product.price}
                        id={product.id}
                        imagen={product.img[0]}
                        status="add"
                        />
                    )
                        
                    )
                }
                </div>
            </div>
        </div>
        </>
    )
}

export default Home