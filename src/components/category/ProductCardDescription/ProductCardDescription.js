import { Component } from "react";
import styles from "./ProductCardDescription.module.scss";

class ProductCardDescription extends Component {
  render() {
    const { product, currency } = this.props;

    return (
      <section className={styles.descriptionContainer}>
        <span id={product.id} className={styles.productName}>
          {product.brand} {product.name}
        </span>
        <span id={product.id} className={styles.productPrice}>
          {product.prices.map(
            (cur) =>
              cur.currency.symbol === currency &&
              `${cur.currency.symbol}${cur.amount.toFixed(2)}`
          )}
        </span>
      </section>
    );
  }
}
export default ProductCardDescription;
