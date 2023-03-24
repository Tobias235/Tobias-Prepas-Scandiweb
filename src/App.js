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
    let arr = [];
    let category = "";
    this.backListener = customHistory.listen((history) => {
      if (customHistory.action === "POP") {
        category = history.pathname.replace(/[/]/g, " ").trim().split(" ");
        arr.push(category);
        if (arr[0].length <= 1 && this.props.category !== arr[0].toString()) {
          let isStringEmpty =
            arr[0].toString() === "" ? "all" : arr[0].toString();
          this.props.onChangeCategory(isStringEmpty);
        } else {
          this.props.onGetProductId(arr[0][1]);
        }
        arr = [];
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

const mapStateToProps = (state) => ({
  category: state.activeReducer.category,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
