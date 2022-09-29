import { Component } from "react";
import { connect } from "react-redux";
import { HandleProductTotalValues } from "../../../utils/HandleProductTotalValues";
import styles from "./CartAmount.module.scss";

class CartAmount extends Component {
  state = {
    total: 0,
    tax: 0,
    quantity: 0,
  };

  handleTotalValues = () => {
    const { cart, currency } = this.props;
    let result = HandleProductTotalValues(cart, currency);
    this.setState({
      total: result[0].total,
      tax: result[0].tax,
      quantity: result[0].quantity,
    });
    console.log(result);
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
