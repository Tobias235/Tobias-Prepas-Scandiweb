import { Component } from "react";
import { connect } from "react-redux";
import MiniCartHeader from "./MiniCartHeader/MiniCartHeader";
import CartProductQuantity from "../Cart/CartProductQuantity/CartProductQuantity";
import CartAttributes from "../Cart/CartAttributes/CartAttributes";
import BrandName from "../UI/BrandName/BrandName";
import Price from "../UI/Price/Price";
import styles from "./MiniCart.module.scss";

class MiniCart extends Component {
  render() {
    const { cartItems } = this.props;
    return (
      <div className={styles.cartCardContainer}>
        <MiniCartHeader cart={cartItems} />
        <div className={styles.cartProductContainer}>
          {cartItems.map((cartItem) => {
            return (
              <div key={cartItem.uniqueId} className={styles.miniCartCard}>
                <section className={styles.cartLeft}>
                  <BrandName
                    cartItem={cartItem}
                    className={styles.miniCartNames}
                  />
                  <Price cartItem={cartItem} className={styles.productPrice} />
                  <CartAttributes
                    cartItem={cartItem}
                    className={styles.attributeName}
                    attributeStyle={styles.attributeOptions}
                    attributeOptions={styles.attributes}
                  />
                </section>
                <section className={styles.cartRight}>
                  <CartProductQuantity
                    cartItem={cartItem}
                    className={styles.cartProductQuantity}
                  />
                  <img
                    src={cartItem.gallery[0]}
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
  cartItems: state.cartReducer.cartItems,
});

export default connect(mapStateToProps, null)(MiniCart);
