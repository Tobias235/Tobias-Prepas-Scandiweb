import { Component } from "react";
import { connect } from "react-redux";
import {
  setDecrementQuantity,
  setDeleteProduct,
  setIncementQuantity,
} from "../../../actions/actions";
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
      <div className={styles.buttonContainer}>
        <button type="button" onClick={handleIncrement}>
          +
        </button>
        <span>{product.quantity}</span>
        <button type="button" onClick={handleDecrement}>
          -
        </button>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  cart: state.cart,
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
