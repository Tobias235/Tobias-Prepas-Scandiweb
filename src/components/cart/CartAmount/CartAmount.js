import { Component } from "react";
import { connect } from "react-redux";
import styles from "./CartAmount.module.scss";

class CartAmount extends Component {
  state = {
    total: 0,
    tax: 0,
    quantity: 0,
    totalArray: [],
    totalQuantity: [],
    isLoaded: false,
  };

  handleTotalValues = () => {
    const { totalArray, totalQuantity } = this.state;
    const { cart, currency } = this.props;
    let total;
    let initial;

    console.log(cart);

    this.setState({
      total: 0,
      tax: 0,
      quantity: 0,
      totalArray: [],
      totalQuantity: [],
    });

    cart.map((cart) => {
      totalQuantity.push(cart.quantity);
      initial = 0;
      const quantity = totalQuantity.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        initial
      );
      cart.prices.map((price) => {
        if (price.currency.symbol === currency) {
          totalArray.push(price.amount * cart.quantity);
          initial = 0;
          total = totalArray.reduce(
            (previousValue, currentValue) => previousValue + currentValue,
            initial
          );
        }
        return this.setState({ total: total, tax: total * 0.21 });
      });
      return this.setState({ quantity: quantity });
    });
  };

  componentDidMount() {
    this.handleTotalValues();
  }

  componentDidUpdate(prevProps) {
    for (let i = 0; i < this.props.cart.length; i++) {
      if (
        this.props.cart[i].quantity !== prevProps.cart[i].quantity ||
        this.props.cart.length !== prevProps.cart.length
      ) {
        this.handleTotalValues();
      }
    }
  }

  render() {
    const { total, tax, quantity } = this.state;
    const { currency } = this.props;

    return (
      <div className={styles.cartAmount}>
        <div>
          <span>Tax 21%:</span>
          <span>Quantity:</span>
          <span>Total:</span>
        </div>
        <div>
          <span>{(currency, tax.toFixed(2))}</span>
          <span>{quantity}</span>
          <span>{(currency, total.toFixed(2))}</span>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  currency: state.currency,
});

export default connect(mapStateToProps, null)(CartAmount);
