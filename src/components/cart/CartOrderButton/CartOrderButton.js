import { Component } from "react";
import styles from "./CartOrderButton.module.scss";

class CartOrderButton extends Component {
  render() {
    return <button className={styles.cartOrderButton}>Order</button>;
  }
}

export default CartOrderButton;
