import { Component } from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";
import styles from "./ProductDescription.module.scss";

class ProductDescription extends Component {
  render() {
    const { product } = this.props;
    return (
      <span className={styles.description}>{parse(product.description)}</span>
    );
  }
}

ProductDescription.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductDescription;
