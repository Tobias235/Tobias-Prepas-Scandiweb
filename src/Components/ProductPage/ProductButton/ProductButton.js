import { Component } from "react";
import { connect } from "react-redux";
import { addProductCart, calculateTotal } from "../../../Actions/CartAction";
import { setActiveAttributes } from "../../../Actions/ActiveAction";
import Button from "../../UI/Button/Button";
import styles from "./ProductButton.module.scss";

class ProductButton extends Component {
  handleAddProductToCart = () => {
    const {
      product,
      activeAttributes,
      currencySymbol,
      onAddToCart,
      onGetActiveAttributes,
      onCalculateTotal,
    } = this.props;
    onAddToCart(product, activeAttributes);
    onGetActiveAttributes(null);
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
  activeAttributes: state.activeReducer.activeAttributes,
  currencySymbol: state.activeReducer.currencySymbol,
});

const mapDispatchToProps = (dispatch) => ({
  onAddToCart: (product, selectedAttributes) =>
    dispatch(addProductCart(product, selectedAttributes)),
  onGetActiveAttributes: (attribute) =>
    dispatch(setActiveAttributes(attribute)),
  onCalculateTotal: (currency) => dispatch(calculateTotal(currency)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductButton);
