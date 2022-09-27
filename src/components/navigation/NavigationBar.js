import { Component } from "react";
import NavigationLinks from "./NavigationLinks/NavigationLinks";
import NavigationLogo from "./NavigationLogo/NavigationLogo";
import NavigationCurrency from "./NavigationCurrencyOption/NavigationCurrency";
import styles from "./NavigationBar.module.scss";

class NavigationBar extends Component {
  render() {
    return (
      <nav className={styles.navigationBar}>
        <div className={styles.navContainer}>
          <NavigationLinks />
          <NavigationLogo />
          <NavigationCurrency />
        </div>
      </nav>
    );
  }
}

export default NavigationBar;
