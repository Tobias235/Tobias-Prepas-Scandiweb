import { Component } from "react";
import PropTypes from "prop-types";
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
    const productInStock = !product.inStock ? true : false;

    return (
      <Button
        text={productInStock ? "OUT OF STOCK" : "ADD TO CART"}
        className={`${styles.productButton} ${
          productInStock ? styles.outOfStock : null
        }`}
        onClick={this.handleAddProductToCart}
        disabled={productInStock}
      />
    );
  }
}

ProductButton.propTypes = {
  product: PropTypes.object.isRequired,
  selectedAttributes: PropTypes.object,
  currencySymbol: PropTypes.string,
  addProductToCart: PropTypes.func.isRequired,
  updateSelectedAttributes: PropTypes.func.isRequired,
  onCalculateTotal: PropTypes.func.isRequired,
};

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
