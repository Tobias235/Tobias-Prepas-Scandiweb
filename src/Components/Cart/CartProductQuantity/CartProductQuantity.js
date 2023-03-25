import { Component } from "react";
import { connect } from "react-redux";
import {
  deleteCartItem,
  setDecrementQuantity,
  setIncementQuantity,
} from "../../../Actions/CartAction";
import negativeButton from "../../../Assets/Images/negativeButton.svg";
import positiveButton from "../../../Assets/Images/positiveButton.svg";
import styles from "./CartProductQuantity.module.scss";

class CartProductQuantity extends Component {
  render() {
    const { cartItem, className } = this.props;

    const handleIncrement = () => {
      const { onIncrementQuantity, currencySymbol } = this.props;
      onIncrementQuantity(cartItem.uniqueId, currencySymbol);
    };

    const handleDecrement = () => {
      const { onDeleteProduct, onDecrementQuantity, currencySymbol } =
        this.props;

      if (cartItem.quantity <= 1) {
        onDeleteProduct(cartItem.uniqueId);
      }
      onDecrementQuantity(cartItem.uniqueId, currencySymbol);
    };

    return (
      <div className={`${styles.buttonContainer} ${className}`}>
        <img
          src={positiveButton}
          alt="Negative sign for increase quantity"
          onClick={handleIncrement}
        />
        <span>{cartItem.quantity}</span>
        <img
          src={negativeButton}
          alt="Negative sign for decrease quantity"
          onClick={handleDecrement}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  cartItems: state.cartReducer.cartItems,
  currencySymbol: state.activeReducer.currencySymbol,
});

const mapDispatchToProps = (dispatch) => ({
  onIncrementQuantity: (increment, currencySymbol) =>
    dispatch(setIncementQuantity(increment, currencySymbol)),
  onDecrementQuantity: (decrement, currencySymbol) =>
    dispatch(setDecrementQuantity(decrement, currencySymbol)),
  onDeleteProduct: (item) => dispatch(deleteCartItem(item)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartProductQuantity);
