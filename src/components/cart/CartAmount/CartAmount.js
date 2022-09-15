import { Component } from "react";
import styles from "./CartAmount.module.scss";

class CartAmount extends Component {
  render() {
    return (
      <div className={styles.cartAmount}>
        <div>
          <span>Tax 21%:</span>
          <span>Quantity:</span>
          <span>Total:</span>
        </div>
        <div>
          <span>$42</span>
          <span>3</span>
          <span>$200</span>
        </div>
      </div>
    );
  }
}

export default CartAmount;
