import { Component } from "react";
import ProductGrid from "../../components/category/ProductGrid/ProductGrid";
import styles from "./CategoryContainer.module.scss";

class CategoryContainer extends Component {
  render() {
    return (
      <div className={styles.categoryContainer}>
        <h1>Category Name</h1>
        <ProductGrid />
      </div>
    );
  }
}

export default CategoryContainer;
