import { Component, PureComponent } from "react";
import { connect } from "react-redux";
import ProductGrid from "../../components/category/ProductGrid/ProductGrid";
import styles from "./CategoryContainer.module.scss";

class CategoryContainer extends PureComponent {
  render() {
    return (
      <div className={styles.categoryContainer}>
        <h1>{this.props.category}</h1>
        <ProductGrid />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  category: state.category,
});

export default connect(mapStateToProps)(CategoryContainer);
