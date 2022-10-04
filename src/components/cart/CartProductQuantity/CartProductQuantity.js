import { Component } from "react";
import { connect } from "react-redux";
import {
  setDecrementQuantity,
  setDeleteProduct,
  setIncementQuantity,
} from "../../../actions/actions";
import negativeButton from "../../../assets/images/negativeButton.svg";
import positiveButton from "../../../assets/images/positiveButton.svg";
import styles from "./CartProductQuantity.module.scss";

class CartProductQuantity extends Component {
  render() {
    const { product } = this.props;

    const handleIncrement = () => {
      this.props.onIncrementQuantity(product.uniqueId);
    };

    const handleDecrement = () => {
      if (product.quantity <= 1) {
        if (window.confirm("Do you want to delete product from cart?")) {
          this.props.onDeleteProduct(product.uniqueId);
        }
      }
      this.props.onDecrementQuantity(product.uniqueId);
    };

    return (
      <div className={`${styles.buttonContainer} ${this.props.className}`}>
        <img
          src={positiveButton}
          alt="Negative sign for increase quantity"
          onClick={handleIncrement}
        />
        <span>{product.quantity}</span>
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
  cart: state.cartReducer.cart,
});

const mapDispatchToProps = (dispatch) => ({
  onIncrementQuantity: (increment) => dispatch(setIncementQuantity(increment)),
  onDecrementQuantity: (decrement) => dispatch(setDecrementQuantity(decrement)),
  onDeleteProduct: (deleteProduct) => dispatch(setDeleteProduct(deleteProduct)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartProductQuantity);
