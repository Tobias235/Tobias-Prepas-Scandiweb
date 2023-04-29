import { Component } from "react";
import PropTypes from "prop-types";
import styles from "./BrandName.module.scss";
class BrandName extends Component {
  render() {
    const { cartItem, product, className } = this.props;

    const item = cartItem || product;

    return (
      <div className={`${styles.brandName} ${className}`}>
        <h1>{item?.brand}</h1>
        <h3>{item?.name}</h3>
      </div>
    );
  }
}

BrandName.propTypes = {
  cartItem: PropTypes.object,
  product: PropTypes.object,
  className: PropTypes.string,
};

export default BrandName;
