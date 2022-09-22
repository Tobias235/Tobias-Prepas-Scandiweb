import { Component } from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { setAddCart } from "../../../actions/actions";
import styles from "./ProductButton.module.scss";

class ProductButton extends Component {
  state = {
    cartItem: [],
    cartArray: [],
    countArray: [],
  };

  render() {
    const { product, activeAttributes, cart } = this.props;
    const { cartItem, cartArray } = this.state;

    const handleAddToCart = () => {
      cartItem.push({
        ...product,
        activeAttributes: activeAttributes,
        uniqueId: uuidv4(),
        quantity: 1,
      });
      cartArray.push(...cart, ...cartItem);
      this.props.onAddToCart(cartArray);

      alert("Product added to cart");
    };
    return (
      <button
        type="button"
        className={styles.productButton}
        onClick={handleAddToCart}
      >
        ADD TO CART
      </button>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
  activeAttributes: state.activeAttributes,
});

const mapDispatchToProps = (dispatch) => ({
  onAddToCart: (product) => dispatch(setAddCart(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductButton);
