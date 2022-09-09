import { Component } from "react";
import ProductCard from "../ProductCard/ProductCard";

import styles from "./ProductGrid.module.scss";

class ProductGrid extends Component {
  render() {
    return (
      <div className={styles.productGrid}>
        <ProductCard />
      </div>
    );
  }
}

export default ProductGrid;
