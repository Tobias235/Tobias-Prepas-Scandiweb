import { Component } from "react";
import CartCard from "../../components/cart/CartCard";
import styles from "./Cart.module.scss";

class Cart extends Component {
  render() {
    return (
      <div className={styles.cartContainer}>
        <h1 className={styles.cartTitle}>CART</h1>
        <CartCard />
      </div>
    );
  }
}

export default Cart;
