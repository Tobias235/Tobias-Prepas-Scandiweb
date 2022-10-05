import { Component } from "react";
import { connect } from "react-redux";
import { setAddCart, setChangeQuantity } from "../../../actions/CartAction";
import { setActiveAttributes } from "../../../actions/ActiveAction";
import { handleAddToCart } from "../../../utils/HandleAddToCart";
import Button from "../../utils/Button/Button";
import styles from "./ProductButton.module.scss";

class ProductButton extends Component {
  handleCartCheck = () => {
    const { product, activeAttributes, cart } = this.props;

    let result = handleAddToCart(product, activeAttributes, cart);

    if (result.equal) {
      this.props.onChangeQuantity(result.equal);
      alert("Product with chosen attributes is already in cart");
    } else {
      this.props.onAddToCart(result);
      alert("Product added to cart");
    }

    if (activeAttributes.length > 0) {
      this.props.onGetActiveAttributes([]);
    }
  };

  render() {
    const { product } = this.props;
    const disabled = !product.inStock ? true : false;
    return (
      <Button
        text="ADD TO CART"
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
  cart: state.cartReducer.cart,
  activeAttributes: state.activeReducer.activeAttributes,
});

const mapDispatchToProps = (dispatch) => ({
  onAddToCart: (product) => dispatch(setAddCart(product)),
  onGetActiveAttributes: (attribute) =>
    dispatch(setActiveAttributes(attribute)),
  onChangeQuantity: (uniqueId) => dispatch(setChangeQuantity(uniqueId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductButton);
