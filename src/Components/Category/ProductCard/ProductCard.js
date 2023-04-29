import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./ProductCard.module.scss";
import CartIcon from "../ProductCartIcon/CartIcon";
import OutOfStock from "../OutOfStock/OutOfStock";
import ProductCardDescription from "../ProductCardDescription/ProductCardDescription";
import {
  addProductCart,
  calculateTotalAmount,
} from "../../../Actions/CartAction";
import { setProductId } from "../../../Actions/ActiveAction";

class ProductCard extends Component {
  handleGetId = (productId) => {
    const { onGetProductId } = this.props;
    onGetProductId(productId);
  };

  handleAddProductToCart = () => {
    const { product, currencySymbol, onAddToCart, onCalculateTotal } =
      this.props;
    onAddToCart(product);
    onCalculateTotal(currencySymbol);
  };

  render() {
    const { currencySymbol, product } = this.props;
    return (
      <div
        className={`${styles.productCard} ${
          product.inStock ? null : styles.outOfStock
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

ProductCard.propTypes = {
  currencySymbol: PropTypes.string.isRequired,
  cartItems: PropTypes.arrayOf(PropTypes.any).isRequired,
  onGetProductId: PropTypes.func.isRequired,
  onAddToCart: PropTypes.func.isRequired,
  onCalculateTotal: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onGetProductId: (id) => dispatch(setProductId(id)),
  onAddToCart: (product) => dispatch(addProductCart(product)),
  onCalculateTotal: (currencySymbol) =>
    dispatch(calculateTotalAmount(currencySymbol)),
});

const mapStateToProps = (state) => ({
  currencySymbol: state.activeReducer.currencySymbol,
  cartItems: state.cartReducer.cartItems,
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
