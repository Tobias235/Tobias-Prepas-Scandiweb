import { Component } from "react";
import styles from "./MiniCartHeader.module.scss";

class MiniCartHeader extends Component {
  render() {
    const { cart } = this.props;
    const quantity = cart
      .map((product) => product.quantity)
      .reduce((prevValue, currentValue) => {
        return prevValue + currentValue;
      }, 0);

    const item = quantity === 1 ? "item" : "items";
    return (
      <h1 className={styles.miniCartHeader}>
        My bag:{" "}
        <span>
          {quantity} {item}
        </span>
      </h1>
    );
  }
}

export default MiniCartHeader;
