import { Component } from "react";
import { connect } from "react-redux";
import ProductAttributes from "../productPage/productAttributes/ProductAttributes";
import ProductPrice from "../productPage/productPrice/ProductPrice";

import styles from "./CartCard.module.scss";
import CartProductAmount from "./CartProductAmount/CartProductAmount";
import CartImageButton from "./CartImageButton/CartImageButton";
import CartImage from "./CartImage/CartImage";
import CartAmount from "./CartAmount/CartAmount";
import ProductTitles from "../productPage/productTitles/ProductTitles";
import CartBorder from "./CartBorder/CartBorder";
import CartOrderButton from "./CartOrderButton/CartOrderButton";

class CartCard extends Component {
  handleChangePicture = () => {};
  render() {
    const { products, currency } = this.props;

    return (
      <div className={styles.cartContainer}>
        {products.map((product) => {
          return (
            <div className={styles.cartCard} key={product.id}>
              <div className={styles.cartLeft}>
                <ProductTitles product={product} />
                <span>
                  <ProductPrice
                    product={product}
                    currency={currency}
                    cart={true}
                  />
                </span>
                <ProductAttributes product={product} />
              </div>
              <div className={styles.cartRight}>
                <CartProductAmount />
                <CartImage gallery={product.gallery} />
                <CartImageButton />
              </div>
            </div>
          );
        })}
        <CartBorder />
        <CartAmount />
        <CartOrderButton />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products,
  currency: state.currency,
});

export default connect(mapStateToProps, null)(CartCard);
