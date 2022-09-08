import { Component } from "react";
import styles from "./ProductCard.module.scss";
import placeholder from "../../../assets/images/realestatehouse.jpg";

class ProductCard extends Component {
  render() {
    return (
      <div className={styles.productCard}>
        <img src={placeholder} alt="product" />
        <span>Product name</span>
        <span>price</span>
      </div>
    );
  }
}

export default ProductCard;
