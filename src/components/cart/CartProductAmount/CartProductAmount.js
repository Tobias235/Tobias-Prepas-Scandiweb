import { Component } from "react";
import styles from "./CartProductAmount.module.scss";

class CartProductAmount extends Component {
  render() {
    return (
      <div className={styles.buttonContainer}>
        <button>+</button>
        <span>0</span>
        <button>-</button>
      </div>
    );
  }
}

export default CartProductAmount;
