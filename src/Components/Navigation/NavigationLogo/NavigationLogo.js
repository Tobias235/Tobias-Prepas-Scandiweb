import { Component } from "react";
import styles from "./NavigationLogo.module.scss";
import logo from "../../../Assets/Images/logo.svg";

class NavigationLogo extends Component {
  render() {
    return (
      <div className={`${styles.navigationLogo} ${this.props.className}`}>
        <img src={logo} alt="logo" />
      </div>
    );
  }
}
export default NavigationLogo;
