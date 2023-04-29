import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteCartItem, changeQuantity } from "../../../Actions/CartAction";
import negativeButton from "../../../Assets/Images/negativeButton.svg";
import positiveButton from "../../../Assets/Images/positiveButton.svg";
import styles from "./CartProductQuantity.module.scss";

class CartProductQuantity extends Component {
  handleIncrement = () => {
    const { changeQuantity, currencySymbol, cartItem } = this.props;
    const { uniqueId } = cartItem;

    changeQuantity(uniqueId, currencySymbol, 1);
  };

  handleDecrement = () => {
    const { deleteProduct, changeQuantity, currencySymbol, cartItem } =
      this.props;
    const { uniqueId, quantity } = cartItem;

    if (quantity <= 1) {
      deleteProduct(uniqueId);
    } else {
      changeQuantity(uniqueId, currencySymbol, -1);
    }
  };
  render() {
    const { cartItem, className } = this.props;

    return (
      <div className={`${styles.buttonContainer} ${className}`}>
        <img
          src={positiveButton}
          alt="Negative sign for increase quantity"
          onClick={this.handleIncrement}
        />
        <span>{cartItem.quantity}</span>
        <img
          src={negativeButton}
          alt="Negative sign for decrease quantity"
          onClick={this.handleDecrement}
        />
      </div>
    );
  }
}

CartProductQuantity.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.any).isRequired,
  currencySymbol: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  cartItems: state.cartReducer.cartItems,
  currencySymbol: state.activeReducer.currencySymbol,
  deleteProduct: PropTypes.func.isRequired,
  changeQuantity: PropTypes.func.isRequired,
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
