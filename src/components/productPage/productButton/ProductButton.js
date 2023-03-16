import { Component } from "react";
import { connect } from "react-redux";
import {
  setAddProductCart,
  setChangeQuantity,
} from "../../../actions/CartAction";
import { setActiveAttributes } from "../../../actions/ActiveAction";
import Button from "../../UI/Button/Button";
import styles from "./ProductButton.module.scss";

class ProductButton extends Component {
  handleAddProductToCart = () => {
    const { product, activeAttributes, onAddToCart, onGetActiveAttributes } =
      this.props;
    onAddToCart(product, activeAttributes);
    onGetActiveAttributes(null);
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
        onClick={this.handleCartCheck}
        disabled={disabled}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  cartItems: state.cartReducer.cartItems,
  activeAttributes: state.activeReducer.activeAttributes,
});

const mapDispatchToProps = (dispatch) => ({
  onAddToCart: (product, selectedAttributes) =>
    dispatch(setAddProductCart(product, selectedAttributes)),
  onGetActiveAttributes: (attribute) =>
    dispatch(setActiveAttributes(attribute)),
  onChangeQuantity: (uniqueId) => dispatch(setChangeQuantity(uniqueId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductButton);
