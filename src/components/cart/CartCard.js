import { Component } from "react";
import { connect } from "react-redux";
import styles from "./CartCard.module.scss";
import CartImage from "./CartImage/CartImage";
import CartAmount from "./CartAmount/CartAmount";
import CartBorder from "./CartBorder/CartBorder";
import CartOrderButton from "./CartOrderButton/CartOrderButton";
import CartAttributes from "./CartAttributes/CartAttributes";
import CartProductQuantity from "./CartProductQuantity/CartProductQuantity";
import BrandName from "../utils/BrandName/BrandName";
import Price from "../utils/Price/Price";

class CartCard extends Component {
  render() {
    const { cart, currency } = this.props;

    return (
      <>
        {cart.length ? (
          <div className={styles.cartContainer}>
            {cart.map((product) => {
              return (
                <div className={styles.cartCard} key={product.uniqueId}>
                  <section className={styles.cartLeft}>
                    <BrandName product={product} />
                    <Price product={product} currency={currency} />
                    <CartAttributes product={product} />
                  </section>
                  <section className={styles.cartRight}>
                    <CartProductQuantity product={product} />
                    <CartImage product={product} />
                  </section>
                </div>
              );
            })}
            <CartBorder />
            <CartAmount cart={cart} />
            <CartOrderButton cart={cart} />
          </div>
        ) : (
          <span className={styles.emptyCart}>The cart is empty! </span>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cartReducer.cart,
  currency: state.activeReducer.currency,
});

export default connect(mapStateToProps, null)(CartCard);
