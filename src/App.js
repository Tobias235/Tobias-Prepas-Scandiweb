import { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import styles from "./App.module.scss";
import NavigationBar from "./components/navigation/NavigationBar";
import Category from "./container/CategoryContainer/Category";
import Product from "./container/ProductContainer/Product";
import Cart from "./container/CartContainer/Cart";

import { connect } from "react-redux";
class App extends Component {
  render() {
    return (
      <>
        <Router>
          <NavigationBar />
          <Route exact path="/:name">
            <Category />
          </Route>
          <Route exact path="product/:productId">
            <Product />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Redirect from="*" to="/all" />
        </Router>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  category: state.category,
});
export default connect(mapStateToProps)(App);
