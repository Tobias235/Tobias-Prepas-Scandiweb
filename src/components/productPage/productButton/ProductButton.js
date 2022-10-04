import { Component } from "react";
import { connect } from "react-redux";
import {
  setActiveAttributes,
  setAddCart,
  setChangeQuantity,
} from "../../../actions/actions";
import { handleAddToCart } from "../../../utils/HandleAddToCart";
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
    this.props.onGetActiveAttributes([]);
  };

  render() {
    return (
      <button
        type="button"
        className={styles.productButton}
        onClick={this.handleCartCheck}
      >
        ADD TO CART
      </button>
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
