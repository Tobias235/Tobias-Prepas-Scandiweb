import { Component } from "react";
import NavigationLinks from "./NavigationLinks/NavigationLinks";
import NavigationLogo from "./NavigationLogo/NavigationLogo";
import NavigationCurrency from "./NavigationCurrencyOption/NavigationCurrency";
import styles from "./NavigationBar.module.scss";
import MiniCartModal from "../../Container/MiniCartModal/MiniCartModal";

class NavigationBar extends Component {
  render() {
    return (
      <nav className={styles.navigationBar}>
        <div className={styles.navContainer}>
          <div className={styles.componentContainer}>
            <NavigationLinks />
            <NavigationLogo />
            <NavigationCurrency />
            <MiniCartModal />
          </div>
        </div>
      </nav>
    );
  }
}

export default NavigationBar;
