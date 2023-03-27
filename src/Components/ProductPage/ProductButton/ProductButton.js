import { Component } from "react";
import { connect } from "react-redux";
import {
  addProductCart,
  calculateTotalAmount,
} from "../../../Actions/CartAction";
import { setSelectedAttributes } from "../../../Actions/ActiveAction";
import Button from "../../UI/Button/Button";
import styles from "./ProductButton.module.scss";

class ProductButton extends Component {
  handleAddProductToCart = () => {
    const {
      product,
      selectedAttributes,
      currencySymbol,
      addProductToCart,
      updateSelectedAttributes,
      onCalculateTotal,
    } = this.props;
    addProductToCart(product, selectedAttributes);
    updateSelectedAttributes(null);
    onCalculateTotal(currencySymbol);
  };

  render() {
    const { product } = this.props;
    const disabled = !product.inStock ? true : false;

    return (
      <Button
        text={disabled ? "OUT OF STOCK" : "ADD TO CART"}
        className={`${styles.productButton} ${
          disabled ? styles.disabled : null
        }`}
        onClick={this.handleAddProductToCart}
        disabled={disabled}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  cartItems: state.cartReducer.cartItems,
  selectedAttributes: state.activeReducer.selectedAttributes,
  currencySymbol: state.activeReducer.currencySymbol,
});

const mapDispatchToProps = (dispatch) => ({
  addProductToCart: (product, selectedAttributes) =>
    dispatch(addProductCart(product, selectedAttributes)),
  updateSelectedAttributes: (selectedAttributes) =>
    dispatch(setSelectedAttributes(selectedAttributes)),
  onCalculateTotal: (currency) => dispatch(calculateTotalAmount(currency)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductButton);
