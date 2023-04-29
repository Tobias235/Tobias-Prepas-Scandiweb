import { Component } from "react";
import PropTypes from "prop-types";
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

CartIcon.propTypes = {
  className: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CartIcon;
