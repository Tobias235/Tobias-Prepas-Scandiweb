import { Component } from "react";
import styles from "./OutOfStock.module.scss";

class OutOfStock extends Component {
  render() {
    return (
      <div className={styles.outOfStock}>
        <span>OUT OF STOCK</span>
      </div>
    );
  }
}

export default OutOfStock;
