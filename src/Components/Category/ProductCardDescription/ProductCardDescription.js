import { Component } from "react";
import PropTypes from "prop-types";
import styles from "./ProductCardDescription.module.scss";

class ProductCardDescription extends Component {
  render() {
    const { product, currencySymbol } = this.props;

    return (
      <section className={styles.descriptionContainer}>
        <span id={product.id} className={styles.productName}>
          {product.brand} {product.name}
        </span>
        <span id={product.id} className={styles.productPrice}>
          {product.prices.map(
            (price) =>
              price.currency.symbol === currencySymbol &&
              `${price.currency.symbol}${price.amount.toFixed(2)}`
          )}
        </span>
      </section>
    );
  }
}

ProductCardDescription.propTypes = {
  product: PropTypes.object.isRequired,
  currencySymbol: PropTypes.string.isRequired,
};

export default ProductCardDescription;
