import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ProductGrid from "../../Components/Category/ProductGrid/ProductGrid";
import styles from "./CategoryContainer.module.scss";

class CategoryContainer extends Component {
  render() {
    const { category } = this.props;
    return (
      <main className={styles.categoryContainer}>
        <h1>{category}</h1>
        <ProductGrid />
      </main>
    );
  }
}

CategoryContainer.propTypes = {
  category: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  category: state.activeReducer.category,
});

export default connect(mapStateToProps)(CategoryContainer);
