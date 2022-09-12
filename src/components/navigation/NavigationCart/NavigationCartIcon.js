import { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./NavigationCartIcon.module.scss";
import cartIcon from "../../../assets/images/cart.svg";

class NavigationCartIcon extends Component {
  render() {
    return (
      <Link
        className={styles.navigationCartIcon}
        to={{
          pathname: `/cart`,
        }}
      >
        <img src={cartIcon} alt="Cart Icon" />
      </Link>
    );
  }
}

export default NavigationCartIcon;
