import { Component } from "react";
import PropTypes from "prop-types";
import arrowLeft from "../../../assets/images/arrowLeft.svg";
import arrowRight from "../../../assets/images/arrowRight.svg";
import styles from "./CartImageButton.module.scss";

class CartImageButton extends Component {
  render() {
    const { product, handlenextimage } = this.props;

    const showArrow = product.gallery.length;

    return (
      <div className={styles.arrowContainer}>
        <div>
          {showArrow > 1 && (
            <img
              src={arrowLeft}
              alt="Arrow icon to render next one"
              className={styles.arrowButton}
              id={product.uniqueId}
              handlenextimage={handlenextimage}
            />
          )}
          {showArrow > 1 && (
            <img
              src={arrowRight}
              alt="Arrow icon to render next one"
              className={styles.arrowButton}
              id={product.uniqueId}
            />
          )}
        </div>
      </div>
    );
  }
}

CartImageButton.propTypes = {
  product: PropTypes.arrayOf(PropTypes.any).isRequired,
  handlenextimage: PropTypes.func.isRequired,
};

export default CartImageButton;
