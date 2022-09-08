import { Component } from "react";
import ProductCard from "../Products/ProductCard";
import styles from "./ProductGrid.module.scss";

class ProductGrid extends Component {
  render() {
    return (
      <div className={styles.productGrid}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    );
  }
}

export default ProductGrid;
