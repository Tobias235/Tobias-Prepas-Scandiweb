import { Component } from "react";
import styles from "./CartIcon.module.scss";
import cartButton from "../../../assets/images/productCartIcon.svg";

class CartIcon extends Component {
  render() {
    return (
      <div className={styles.cartIcon}>
        <img
          src={cartButton}
          alt="Add to cart button"
          className={`${styles.showCartButton} ${this.props.className}`}
          id={this.props.id}
        />
      </div>
    );
  }
}

export default CartIcon;
