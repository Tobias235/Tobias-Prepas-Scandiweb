import { Component } from "react";
import { connect } from "react-redux";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { setChangeCategory, setProductId } from "./actions/actions";
import NavigationBar from "./components/navigation/NavigationBar";
import Category from "./container/CategoryContainer/Category";
import Product from "./container/ProductContainer/Product";
import Cart from "./container/CartContainer/Cart";
import MiniCartModal from "./container/MiniCartModal/MiniCartModal";

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
          <MiniCartModal />
          <Switch>
            <Route exact path={["/", "/:name"]} component={Category} />
            <Route exact path="/details/:productId" component={Product} />
            <Route exact path="/cart/:number" component={Cart} />
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
