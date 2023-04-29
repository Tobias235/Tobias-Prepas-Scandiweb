import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styles from "./CartAmount.module.scss";

class CartAmount extends Component {
  render() {
    const { totalAmount, currencySymbol, cartItems } = this.props;

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
            {(totalAmount * 0.21).toFixed(2)}
          </span>
          <span>{totalQuantity}</span>
          <span>
            {currencySymbol}
            {totalAmount.toFixed(2)}
          </span>
        </div>
      </div>
    );
  }
}

CartAmount.propTypes = {
  currencySymbol: PropTypes.string.isRequired,
  totalAmount: PropTypes.number.isRequired,
  cartItems: PropTypes.arrayOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => ({
  currencySymbol: state.activeReducer.currencySymbol,
  totalAmount: state.cartReducer.totalAmount,
});

export default connect(mapStateToProps, null)(CartAmount);
