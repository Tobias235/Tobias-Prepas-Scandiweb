import { Component } from "react";
import styles from "./ProductPrice.module.scss";

class ProductPrice extends Component {
  render() {
    const { product, currency } = this.props;
    return (
      <span className={`${styles.price} ${this.props.className}`}>
        {!this.props.miniCart && "Price:"}
        {product.prices.map((cur) => {
          return (
            cur.currency.symbol === currency && (
              <span className={`${styles.amount}`} key={cur.currency.symbol}>
                {/* ${this.props.className} */}
                {cur.currency.symbol}
                {cur.amount}
              </span>
            )
          );
        })}
      </span>
    );
  }
}

export default ProductPrice;
