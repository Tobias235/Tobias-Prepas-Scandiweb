import { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import styles from "./App.module.scss";
import NavigationBar from "./components/navigation/NavigationBar";
import Category from "./container/CategoryContainer/Category";
import Product from "./container/ProductContainer/Product";
import Cart from "./container/CartContainer/Cart";
import MiniCartContainer from "./container/MiniCartContainer/MiniCartContainer";
class App extends Component {
  render() {
    return (
      <>
        <Router className={styles.app}>
          <NavigationBar />
          <MiniCartContainer />
          <Route exact path="/:name">
            <Category />
          </Route>
          <Route exact path="/product/:productId">
            <Product />
          </Route>
          <Route exact path="/cart/:number">
            <Cart />
          </Route>
          <Redirect from="*" to="/all" />
        </Router>
      </>
    );
  }
}

export default App;
