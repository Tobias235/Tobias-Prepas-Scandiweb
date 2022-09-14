import { Component } from "react";
import { connect } from "react-redux";
import { setAddCart } from "../../../actions/actions";
import styles from "./ProductButton.module.scss";

class ProductButton extends Component {
  state = {
    cartArray: [],
  };
  render() {
    const { product, cart } = this.props;

    const handleAddToCart = () => {
      const { cartArray } = this.state;

      cartArray.push(...cart, product);
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
});

const mapDispatchToProps = (dispatch) => ({
  onAddToCart: (product) => dispatch(setAddCart(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductButton);
