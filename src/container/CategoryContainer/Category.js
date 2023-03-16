import { Component } from "react";
import { connect } from "react-redux";
import ProductGrid from "../../Components/Category/ProductGrid/ProductGrid";
import styles from "./CategoryContainer.module.scss";

class CategoryContainer extends Component {
  render() {
    return (
      <main className={styles.categoryContainer}>
        <h1>{this.props.category}</h1>
        <ProductGrid />
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  category: state.activeReducer.category,
});

export default connect(mapStateToProps)(CategoryContainer);
