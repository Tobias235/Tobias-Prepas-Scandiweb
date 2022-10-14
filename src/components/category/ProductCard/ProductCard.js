import { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./ProductCard.module.scss";
import CartIcon from "../ProductCartIcon/CartIcon";
import OutOfStock from "../OutOfStock/OutOfStock";
import ProductCardDescription from "../ProductCardDescription/ProductCardDescription";
import { setAddCart, setChangeQuantity } from "../../../actions/CartAction";
import {
  setActiveAttributes,
  setProductId,
} from "../../../actions/ActiveAction";
import { handleAddToCart } from "../../../utils/HandleAddToCart";

class ProductCard extends Component {
  handleGetId = (productId) => {
    this.props.onGetProductId(productId);
  };

  handleCartCheck = () => {
    const { product, activeAttributes, cart } = this.props;
    let result;

    if (product.attributes.length === 0) {
      result = handleAddToCart(product, activeAttributes, cart);
    } else {
      if (
        window.confirm(
          "Not all attributes were selected, Do you want to continue with default attributes?"
        )
      ) {
        result = handleAddToCart(product, activeAttributes, cart);
      } else {
        return;
      }
    }

    if (result.equal) {
      this.props.onChangeQuantity(result.equal);
      alert(
        "Product with chosen attributes is already in cart, updated quantity"
      );
    } else {
      this.props.onAddToCart(result);
      alert("Product added to cart");
    }
  };

  componentDidMount() {
    if (this.props.activeAttributes.length > 0) {
      this.handleActiveAttributes();
    }
  }

  handleActiveAttributes() {
    this.props.onGetActiveAttributes([]);
  }

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
  onAddToCart: (product) => dispatch(setAddCart(product)),
  onChangeQuantity: (uniqueId) => dispatch(setChangeQuantity(uniqueId)),
  onGetActiveAttributes: (attribute) =>
    dispatch(setActiveAttributes(attribute)),
});

const mapStateToProps = (state) => ({
  currency: state.activeReducer.currency,
  cart: state.cartReducer.cart,
  activeAttributes: state.activeReducer.activeAttributes,
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
