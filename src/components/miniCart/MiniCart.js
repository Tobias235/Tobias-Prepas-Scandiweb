import { Component } from "react";
import { connect } from "react-redux";
import MiniCartHeader from "./MiniCartHeader/MiniCartHeader";
import CartProductQuantity from "../cart/CartProductQuantity/CartProductQuantity";
import CartAttributes from "../cart/CartAttributes/CartAttributes";
import BrandName from "../utils/BrandName/BrandName";
import Price from "../utils/Price/Price";
import styles from "./MiniCart.module.scss";

class MiniCart extends Component {
  render() {
    const { cart } = this.props;

    return (
      <div className={styles.cartCardContainer}>
        <MiniCartHeader cart={cart} />
        <div className={styles.cartProductContainer}>
          {cart.map((product) => {
            return (
              <div key={product.uniqueId} className={styles.miniCartCard}>
                <section className={styles.cartLeft}>
                  <BrandName
                    product={product}
                    className={styles.miniCartNames}
                  />
                  <Price product={product} className={styles.productPrice} />
                  <CartAttributes
                    product={product}
                    className={styles.attributeName}
                    attributeStyle={styles.attributeOptions}
                    attributeOptions={styles.attributes}
                  />
                </section>
                <section className={styles.cartRight}>
                  <CartProductQuantity
                    product={product}
                    className={styles.cartProductQuantity}
                  />
                  <img
                    src={product.gallery[0]}
                    alt="product"
                    className={styles.productImage}
                  />
                </section>
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
});

export default connect(mapStateToProps, null)(MiniCart);
