import { Component } from "react";
import { connect } from "react-redux";
import ProductPrice from "../productPage/productPrice/ProductPrice";
import ProductTitles from "../productPage/productTitles/ProductTitles";

import styles from "./CartCard.module.scss";
import CartImage from "./CartImage/CartImage";
import CartAmount from "./CartAmount/CartAmount";
import CartBorder from "./CartBorder/CartBorder";
import CartOrderButton from "./CartOrderButton/CartOrderButton";
import CartAttributes from "./CartAttributes/CartAttributes";
import CartProductQuantity from "./CartProductQuantity/CartProductQuantity";

class CartCard extends Component {
  handleChangePicture = () => {};
  render() {
    const { cart, currency } = this.props;

    return (
      <>
        {cart.length ? (
          <div className={styles.cartContainer}>
            {cart.map((product) => {
              return (
                <div className={styles.cartCard} key={product.uniqueId}>
                  <div className={styles.cartLeft}>
                    <ProductTitles product={product} />
                    <ProductPrice product={product} currency={currency} />
                    <CartAttributes product={product} />
                  </div>
                  <div className={styles.cartRight}>
                    <CartProductQuantity product={product} />
                    <CartImage product={product} />
                  </div>
                </div>
              );
            })}
            <CartBorder />
            <CartAmount cart={cart} />
            <CartOrderButton />
          </div>
        ) : (
          <p className={styles.emptyCart}>The cart is empty! :( </p>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
  currency: state.currency,
});

export default connect(mapStateToProps, null)(CartCard);
