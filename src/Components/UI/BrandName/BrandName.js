import { Component } from "react";
import styles from "./BrandName.module.scss";
class BrandName extends Component {
  render() {
    const { cartItem, product } = this.props;

    const item = cartItem || product;

    return (
      <div className={`${styles.brandName} ${this.props.className}`}>
        <h1>{item?.brand}</h1>
        <h3>{item?.name}</h3>
      </div>
    );
  }
}

export default BrandName;
