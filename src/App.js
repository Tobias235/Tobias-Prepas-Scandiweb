import { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
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
          <Route exact path={["/", "/:name"]} component={Category} />
          <Route exact path="/details/:productId" component={Product} />
          <Route exact path="/cart/:number" component={Cart} />
        </Router>
      </>
    );
  }
}

export default App;
