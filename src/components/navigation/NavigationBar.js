import { Component } from "react";
import NavigationLinks from "./NavigationLinks/NavigationLinks";
import NavigationLogo from "./NavigationLogo/NavigationLogo";
import NavigationCurrency from "./NavigationCurrencyOption/NavigationCurrency";
import styles from "./NavigationBar.module.scss";

class NavigationBar extends Component {
  render() {
    return (
      <nav className={styles.navigationBar}>
        <NavigationLinks />
        <NavigationLogo />
        <NavigationCurrency />
      </nav>
    );
  }
}

export default NavigationBar;
