import { Component } from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavigationCartIcon.module.scss";
import cartIcon from "../../../assets/images/cart.svg";

class NavigationCartIcon extends Component {
  render() {
    return (
      <NavLink
        className={styles.navigationCartIcon}
        to={{
          pathname: `/cart/${Math.floor(Math.random() * 1000000)}`,
        }}
      >
        <img src={cartIcon} alt="Cart Icon" />
      </NavLink>
    );
  }
}

export default NavigationCartIcon;
