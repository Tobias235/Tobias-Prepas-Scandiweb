import { Component } from "react";
import styles from "./ProductTitles.module.scss";
class ProductTitles extends Component {
  render() {
    const { product } = this.props;
    return (
      <div className={styles.productTitles}>
        <h1>{product.brand}</h1>
        <h3>{product.name}</h3>
      </div>
    );
  }
}

export default ProductTitles;
