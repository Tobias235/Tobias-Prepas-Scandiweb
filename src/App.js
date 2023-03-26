import { Component } from "react";
import { connect } from "react-redux";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import { setProductId, setChangeCategory } from "./Actions/ActiveAction";
import NavigationBar from "./Components/Navigation/NavigationBar";
import MobileNavigation from "./Components/MobileNavigation/MobileNavigation";
import Category from "./Container/CategoryContainer/Category";
import Product from "./Container/ProductContainer/Product";
import Cart from "./Container/CartContainer/Cart";

const customHistory = createBrowserHistory();

class App extends Component {
  componentDidMount() {
    const { onChangeCategory, onGetProductId } = this.props;
    this.backListener = customHistory.listen(({ pathname }) => {
      const [, urlCategory, productId] = pathname.split("/");
      if (urlCategory || urlCategory === "all") {
        const isStringEmpty = urlCategory === "" ? "all" : urlCategory;
        onChangeCategory(isStringEmpty);
      }
      if (productId) {
        onGetProductId(productId);
      }
    });
  }

  componentWillUnmount() {
    this.backListener();
  }

  render() {
    return (
      <>
        <Router history={customHistory}>
          <NavigationBar />
          <MobileNavigation />
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/all" />} />
            <Route exact path={"/:name"} component={Category} />
            <Route exact path="/cart/:number" component={Cart} />
            <Route exact path="/:category/:productId" component={Product} />
          </Switch>
        </Router>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onChangeCategory: (category) => dispatch(setChangeCategory(category)),
  onGetProductId: (id) => dispatch(setProductId(id)),
});

export default connect(null, mapDispatchToProps)(App);
