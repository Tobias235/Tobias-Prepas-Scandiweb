import { Component } from "react";
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

export default ProductDescription;
