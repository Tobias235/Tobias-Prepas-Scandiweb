import { Component } from "react";
import styles from "./NavigationCartIcon.module.scss";
import cartIcon from "../../../assets/images/cart.svg";

class NavigationCartIcon extends Component {
  render() {
    return (
      <div className={styles.navigationCartIcon}>
        <img src={cartIcon} alt="Cart Icon" />
      </div>
    );
  }
}

export default NavigationCartIcon;
