import { Component } from "react";
import styles from "./CartIcon.module.scss";
import cartButton from "../../../Assets/Images/productCartIcon.svg";

class CartIcon extends Component {
  render() {
    const { className, id, onClick } = this.props;

    return (
      <div className={styles.cartIcon}>
        <img
          src={cartButton}
          alt="Add to cart button"
          className={`${styles.showCartButton} ${className}`}
          id={id}
          onClick={onClick}
        />
      </div>
    );
  }
}

export default CartIcon;
