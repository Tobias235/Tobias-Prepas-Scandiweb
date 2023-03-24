import { Component } from "react";
import CartCard from "../../Components/Cart/CartCard";
import styles from "./Cart.module.scss";

class Cart extends Component {
  render() {
    return (
      <main className={styles.cartContainer}>
        <h1 className={styles.cartTitle}>CART</h1>
        <CartCard />
      </main>
    );
  }
}

export default Cart;
