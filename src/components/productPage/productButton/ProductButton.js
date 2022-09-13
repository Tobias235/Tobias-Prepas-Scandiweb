import { Component } from "react";
import styles from "./ProductButton.module.scss";

class ProductButton extends Component {
  render() {
    return (
      <button type="button" className={styles.productButton}>
        ADD TO CART
      </button>
    );
  }
}

export default ProductButton;
