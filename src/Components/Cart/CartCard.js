import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styles from "./CartCard.module.scss";
import CartImage from "./CartImage/CartImage";
import CartAmount from "./CartAmount/CartAmount";
import CartBorder from "./CartBorder/CartBorder";
import CartOrderButton from "./CartOrderButton/CartOrderButton";
import CartAttributes from "./CartAttributes/CartAttributes";
import CartProductQuantity from "./CartProductQuantity/CartProductQuantity";
import BrandName from "../UI/BrandName/BrandName";
import Price from "../UI/Price/Price";

class CartCard extends Component {
  render() {
    const { cartItems, currency } = this.props;

    return (
      <>
        {cartItems.length ? (
          <div className={styles.cartContainer}>
            {cartItems.map((cartItem) => {
              return (
                <div className={styles.cartCard} key={cartItem.uniqueId}>
                  <section className={styles.cartLeft}>
                    <BrandName cartItem={cartItem} />
                    <Price cartItem={cartItem} currency={currency} />
                    <CartAttributes cartItem={cartItem} />
                  </section>
                  <section className={styles.cartRight}>
                    <CartProductQuantity cartItem={cartItem} />
                    <CartImage cartItem={cartItem} />
                  </section>
                </div>
              );
            })}
            <CartBorder />
            <CartAmount cartItems={cartItems} />
            <CartOrderButton cart={cartItems} />
          </div>
        ) : (
          <span className={styles.emptyCart}>The cart is empty! </span>
        )}
      </>
    );
  }
}

CartCard.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.any).isRequired,
  currencySymbol: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  cartItems: state.cartReducer.cartItems,
  currencySymbol: state.activeReducer.currencySymbol,
});

export default connect(mapStateToProps, null)(CartCard);
