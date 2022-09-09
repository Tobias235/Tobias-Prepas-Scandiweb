import { Component } from "react";
import { connect } from "react-redux";
import ProductGrid from "../../components/category/ProductGrid/ProductGrid";
import styles from "./CategoryContainer.module.scss";

class CategoryContainer extends Component {
  render() {
    const { category } = this.props;

    return (
      <div className={styles.categoryContainer}>
        <h1>{category}</h1>
        <ProductGrid />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  category: state.category,
});

export default connect(mapStateToProps)(CategoryContainer);
