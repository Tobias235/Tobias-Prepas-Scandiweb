import { Component } from "react";
import arrowLeft from "../../../assets/images/arrowLeft.svg";
import arrowRight from "../../../assets/images/arrowRight.svg";
import styles from "./CartImageButton.module.scss";

class CartImageButton extends Component {
  render() {
    return (
      <div className={styles.arrowContainer}>
        <div>
          <img
            src={arrowLeft}
            alt="Arrow icon to render next one"
            className={styles.arrowButton}
          />
          <img
            src={arrowRight}
            alt="Arrow icon to render next one"
            className={styles.arrowButton}
          />
        </div>
      </div>
    );
  }
}

export default CartImageButton;
