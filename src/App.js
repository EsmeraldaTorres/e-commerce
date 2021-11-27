import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Styles
import "bootstrap/dist/css/bootstrap.min.css";
//Context
import { ProductListProvider} from "./Context/ProductListContext";
import { CartProvider } from "./Context/CartContext";
import { PayProvider } from "./Context/PayContext";
// Components
import Home from "./Pages/Home";
import Header from "./Custom/Header";
import Cart from "./Pages/Cart";
import Pay from "./Pages/Pay"

const App = () => {
  return (
    <>
    <ProductListProvider>
      <CartProvider>
        <PayProvider>
        <Router>
          <Header/>
            <Switch>
              <Route path="/" exact>
                <Home/>
              </Route>
            </Switch>
            <Switch>
              <Route path="/cart" exact>
                <Cart/>
              </Route>
            </Switch>
            <Switch>
              <Route path="/pay" exact>
                <Pay/>
              </Route>
            </Switch>
        </Router>
        </PayProvider>
      </CartProvider>
    </ProductListProvider>
    </>
  );
};

export default App;
