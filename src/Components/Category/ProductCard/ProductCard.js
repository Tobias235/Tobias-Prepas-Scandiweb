import { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./ProductCard.module.scss";
import CartIcon from "../ProductCartIcon/CartIcon";
import OutOfStock from "../OutOfStock/OutOfStock";
import ProductCardDescription from "../ProductCardDescription/ProductCardDescription";
import { addProductCart, calculateTotal } from "../../../Actions/CartAction";
import {
  setActiveAttributes,
  setProductId,
} from "../../../Actions/ActiveAction";

class ProductCard extends Component {
  handleGetId = (productId) => {
    this.props.onGetProductId(productId);
  };

  handleAddProductToCart = () => {
    const {
      product,
      activeAttributes,
      currencySymbol,
      onAddToCart,
      onCalculateTotal,
    } = this.props;
    onAddToCart(product, activeAttributes);
    onCalculateTotal(currencySymbol);
  };

  render() {
    const { currencySymbol, product } = this.props;
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
          <ProductCardDescription
            product={product}
            currencySymbol={currencySymbol}
          />
        </Link>
        {product.inStock && (
          <CartIcon
            className={styles.addCartButton}
            id={product.id}
            onClick={this.handleAddProductToCart}
          />
        )}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onGetProductId: (id) => dispatch(setProductId(id)),
  onAddToCart: (product) => dispatch(addProductCart(product)),
  onGetActiveAttributes: (attribute) =>
    dispatch(setActiveAttributes(attribute)),
  onCalculateTotal: (currencySymbol) =>
    dispatch(calculateTotal(currencySymbol)),
});

const mapStateToProps = (state) => ({
  currencySymbol: state.activeReducer.currencySymbol,
  cartItems: state.cartReducer.cartItems,
  activeAttributes: state.activeReducer.activeAttributes,
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
