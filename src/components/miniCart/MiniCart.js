import { Component } from "react";
import { connect } from "react-redux";
import MiniCartHeader from "./MiniCartHeader/MiniCartHeader";
import ProductTitles from "../productPage/productTitles/ProductTitles";
import ProductPrice from "../productPage/productPrice/ProductPrice";
import CartAttributes from "../cart/CartAttributes/CartAttributes";
import CartProductQuantity from "../cart/CartProductQuantity/CartProductQuantity";
import styles from "./MiniCart.module.scss";

class MiniCart extends Component {
  render() {
    const { cart, currency } = this.props;

    return (
      <div className={styles.cartCardContainer}>
        <MiniCartHeader cart={cart} />
        <div className={styles.cartProductContainer}>
          {cart.map((product) => {
            return (
              <div key={product.uniqueId} className={styles.miniCartCard}>
                <div className={styles.cartLeft}>
                  <ProductTitles
                    product={product}
                    className={styles.miniCartTitles}
                  />
                  <ProductPrice
                    product={product}
                    currency={currency}
                    className={styles.price}
                    miniCart={true}
                  />
                  <CartAttributes
                    product={product}
                    className={styles.attributeName}
                    attributeStyle={styles.attributeOptions}
                    attributeOptions={styles.attributes}
                  />
                </div>
                <div className={styles.cartRight}>
                  <CartProductQuantity
                    product={product}
                    className={styles.cartProductQuantity}
                  />
                  <img
                    src={product.gallery[0]}
                    alt="product"
                    className={styles.productImage}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cartReducer.cart,
  currency: state.activeReducer.currency,
});

export default connect(mapStateToProps, null)(MiniCart);
