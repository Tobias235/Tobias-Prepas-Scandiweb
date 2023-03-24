import { Component } from "react";
import styles from "./BrandName.module.scss";
class BrandName extends Component {
  render() {
    const { product } = this.props;
    return (
      <div className={`${styles.brandName} ${this.props.className}`}>
        <h1>{product.brand}</h1>
        <h3>{product.name}</h3>
      </div>
    );
  }
}

export default BrandName;
