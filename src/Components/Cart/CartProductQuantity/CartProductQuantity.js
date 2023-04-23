import { Component } from "react";
import { connect } from "react-redux";
import { deleteCartItem, changeQuantity } from "../../../Actions/CartAction";
import negativeButton from "../../../Assets/Images/negativeButton.svg";
import positiveButton from "../../../Assets/Images/positiveButton.svg";
import styles from "./CartProductQuantity.module.scss";

class CartProductQuantity extends Component {
  render() {
    const { cartItem, className } = this.props;

    const handleIncrement = () => {
      const { changeQuantity, currencySymbol } = this.props;
      const { uniqueId } = cartItem;

      changeQuantity(uniqueId, currencySymbol, 1);
    };

    const handleDecrement = () => {
      const { deleteProduct, changeQuantity, currencySymbol } = this.props;
      const { uniqueId, quantity } = cartItem;

      if (quantity <= 1) {
        deleteProduct(uniqueId);
      } else {
        changeQuantity(uniqueId, currencySymbol, -1);
      }
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
  changeQuantity: (uniqueId, currencySymbol, amount) =>
    dispatch(changeQuantity(uniqueId, currencySymbol, amount)),
  deleteProduct: (item) => dispatch(deleteCartItem(item)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartProductQuantity);
