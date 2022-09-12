import { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styles from "./App.module.scss";
import NavigationBar from "./components/navigation/NavigationBar";
import Category from "./container/CategoryContainer/Category";
import Product from "./container/ProductContainer/Product";
import Cart from "./container/CartContainer/Cart";

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <NavigationBar />
          <Route exact path="/category/:name">
            <Category />
          </Route>
          <Route exact path="product/:productId">
            <Product />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
        </Router>
      </>
    );
  }
}

export default App;
