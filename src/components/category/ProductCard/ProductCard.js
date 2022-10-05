import { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./ProductCard.module.scss";
import CartIcon from "../ProductCartIcon/CartIcon";
import OutOfStock from "../OutOfStock/OutOfStock";
import ProductCardDescription from "../ProductCardDescription/ProductCardDescription";
import { setAddCart, setChangeQuantity } from "../../../actions/CartAction";
import { setProductId } from "../../../actions/ActiveAction";
import { handleAddToCart } from "../../../utils/HandleAddToCart";

class ProductCard extends Component {
  handleGetId = (productId) => {
    this.props.onGetProductId(productId);
  };

  handleAddCart = () => {
    const { product, activeAttributes, cart } = this.props;

    let result = handleAddToCart(product, activeAttributes, cart);

    if (result.equal) {
      this.props.onChangeQuantity(result.equal);
      alert("Product with chosen attributes is already in cart");
    } else {
      this.props.onAddToCart(result);
      alert("Product added to cart");
    }
  };

  render() {
    const { currency, product } = this.props;

    return (
      <div
        className={`${styles.productCard} ${
          product.inStock ? null : styles.noStock
        }`}
      >
        <Link
          key={product.id}
          id={product.id}
          className={styles.link}
          to={{ pathname: `/details/${product.id}` }}
          onClick={() => this.handleGetId(product.id)}
        >
          <img
            src={product.gallery[0]}
            alt="product"
            id={product.id}
            className={styles.productPicture}
          />

          {!product.inStock && <OutOfStock />}
          <ProductCardDescription product={product} currency={currency} />
        </Link>
        {product.inStock && (
          <CartIcon
            className={styles.addCartButton}
            id={product.id}
            onClick={this.handleAddCart}
          />
        )}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onGetProductId: (id) => dispatch(setProductId(id)),
  onAddToCart: (product) => dispatch(setAddCart(product)),
  onChangeQuantity: (uniqueId) => dispatch(setChangeQuantity(uniqueId)),
});

const mapStateToProps = (state) => ({
  currency: state.activeReducer.currency,
  cart: state.cartReducer.cart,
  activeAttributes: state.activeReducer.activeAttributes,
  category: state.activeReducer.category,
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
