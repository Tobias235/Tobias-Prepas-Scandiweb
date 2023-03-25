import { Component } from "react";
import { connect } from "react-redux";
import styles from "./CartAmount.module.scss";

class CartAmount extends Component {
  render() {
    const { totalValue, currencySymbol, cartItems } = this.props;

    const totalQuantity = cartItems?.reduce(
      (acc, item) => acc + item.quantity,
      0
    );

    return (
      <div className={styles.cartAmount}>
        <div>
          <span>Tax 21%:</span>
          <span>Quantity:</span>
          <span>Total:</span>
        </div>
        <div>
          <span>
            {currencySymbol}
            {(totalValue * 0.21).toFixed(2)}
          </span>
          <span>{totalQuantity}</span>
          <span>
            {currencySymbol}
            {totalValue.toFixed(2)}
          </span>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  currencySymbol: state.activeReducer.currencySymbol,
  totalValue: state.cartReducer.totalValue,
});

export default connect(mapStateToProps, null)(CartAmount);
