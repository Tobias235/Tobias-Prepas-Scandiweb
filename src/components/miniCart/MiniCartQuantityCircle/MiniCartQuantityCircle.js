import { Component } from "react";
import { connect } from "react-redux";
import styles from "./MiniCartQuantityCircle.module.scss";

class MiniCartQuantityCircle extends Component {
  render() {
    const { cartItems } = this.props;
    const quantity = cartItems
      .map((cartItem) => cartItem.quantity)
      .reduce((prevValue, currValue) => {
        return prevValue + currValue;
      }, 0);

    const showQuantityIcon = quantity > 0 ? true : false;
    return (
      <>
        {showQuantityIcon && (
          <span className={styles.quantityCircle}>{quantity}</span>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  cartItems: state.cartReducer.cartItems,
});

export default connect(mapStateToProps)(MiniCartQuantityCircle);
