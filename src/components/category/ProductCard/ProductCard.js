import { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./ProductCard.module.scss";
import CartIcon from "../ProductCartIcon/CartIcon";
import OutOfStock from "../OutOfStock/OutOfStock";
import ProductCardDescription from "../ProductCardDescription/ProductCardDescription";
import {
  setAddProductCart,
  setChangeQuantity,
} from "../../../actions/CartAction";
import {
  setActiveAttributes,
  setProductId,
} from "../../../actions/ActiveAction";

class ProductCard extends Component {
  handleGetId = (productId) => {
    this.props.onGetProductId(productId);
  };

  handleAddProductToCart = () => {
    const { product, activeAttributes, onAddToCart } = this.props;
    onAddToCart(product, activeAttributes);
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
          to={{ pathname: `/${product.category}/${product.id}` }}
          onClick={() => this.handleGetId(product.id)}
        >
          <div className={styles.imageContainer}>
            <img
              src={product.gallery[0]}
              alt="product"
              id={product.id}
              className={styles.productPicture}
            />
          </div>
          {!product.inStock && <OutOfStock />}
          <ProductCardDescription product={product} currency={currency} />
        </Link>
        {product.inStock && (
          <CartIcon
            className={styles.addCartButton}
            id={product.id}
            onClick={this.handleCartCheck}
          />
        )}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onGetProductId: (id) => dispatch(setProductId(id)),
  onAddToCart: (product) => dispatch(setAddProductCart(product)),
  onChangeQuantity: (uniqueId) => dispatch(setChangeQuantity(uniqueId)),
  onGetActiveAttributes: (attribute) =>
    dispatch(setActiveAttributes(attribute)),
});

const mapStateToProps = (state) => ({
  currency: state.activeReducer.currency,
  cartItems: state.cartReducer.cartItems,
  activeAttributes: state.activeReducer.activeAttributes,
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
