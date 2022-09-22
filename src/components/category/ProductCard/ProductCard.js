import { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./ProductCard.module.scss";
import CartIcon from "../ProductCartIcon/CartIcon";
import OutOfStock from "../OutOfStock/OutOfStock";
import ProductCardDescription from "../ProductCardDescription/ProductCardDescription";
import { setAddCart, setProductId } from "../../../actions/actions";
import { v4 as uuidv4 } from "uuid";

class ProductCard extends Component {
  state = {
    attributes: [],
    cartProduct: [],
    cartArray: [],
  };
  handleGetId = (productId) => {
    this.props.onGetProductId(productId);
  };

  addToCartButton = () => {
    const { product, cart } = this.props;
    const { attributes, cartProduct, cartArray } = this.state;

    product.attributes.map((attribute) => {
      return attributes.push({
        id: product.id,
        name: attribute.name,
        value: attribute.items[0].value,
      });
    });

    console.log(attributes);
    cart.map((item) => {
      attributes.map((attribute) => {
        if (item.id === attribute.id) {
          item.activeAttributes.map((activeAttribute) => {
            if (activeAttribute.value === attribute.value) {
              let newQuantity = item.quantity + 1;
              return {
                ...item,
                quantity: newQuantity,
              };
            }
            return activeAttribute;
          });
        }
        return attribute;
      });
      return cart;
    });

    cartProduct.push({
      ...product,
      activeAttributes: attributes,
      uniqueId: uuidv4(),
      quantity: 1,
    });

    cartArray.push(...cart, ...cartProduct);

    this.props.onAddToCart(cartArray);
    this.setState({
      attributes: [],
      cartProduct: [],
      cartArray: [],
    });
    // alert("Product added to cart!");
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
          to={{ pathname: `/product/${product.id}` }}
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
            onClick={this.addToCartButton}
          />
        )}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onGetProductId: (id) => dispatch(setProductId(id)),
  onAddToCart: (product) => dispatch(setAddCart(product)),
});

const mapStateToProps = (state) => ({
  currency: state.currency,
  cart: state.cart,
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
