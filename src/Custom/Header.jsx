import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import {Container, Nav, Navbar} from "react-bootstrap";
import CartContext from "../Context/CartContext";
import kiplingLogo from "../assets/kiplingLogo.png"
import "./Header.styles.css"
import  "./bootstrap.min.css.map"

const Header = ()=>{
  const { state } = useContext(CartContext);
  const [menu,setMenu] = useState(false)

  console.log(state)
  const showMenu = ()=>{
    setMenu(true)
  }
    return(
      <>
    <nav class="navbar p-3 navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand" href="#">
        <img className="logo"src={kiplingLogo} alt="logo" />
      </Link>
      <div>
      <Link to="/cart" className="marginR text-dark dis-none ">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="black" className="bi bi-cart2" viewBox="0 0 16 16">
      <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
      </svg>
      {state?.cart?.length}
      </Link>
      <button className="navbar-toggler
      border border-info text-info" onClick={showMenu} 
      type="button" data-toggle="collapse" 
      data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" 
      aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      </div>
      
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <Link to="/" className="nav-link" href="#">Home</Link>
          </li>
          <li class="nav-item">
            <Link to="/cart" className="nav-link" >cart: {state?.cart?.length}</Link>
          </li>
          {/* <li class="nav-item">
            <Link to="/" className="nav-link" href="#">Price: ${state.totalPrice}</Link>
          </li> */}
          <li class="nav-item">
            <Link to="/" className="nav-link" href="#">My count</Link>
          </li>
        </ul>
        <form className="d-flex form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2 br-left" type="search" placeholder="Search"/>
          <button className="my-2 my-sm-0 br-rigth" variant="btn btn-outline-black "data-toggle="button" type="submit">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
          </button>
        </form>
      </div>
  </nav>
  </>
  )

    }
export default Header