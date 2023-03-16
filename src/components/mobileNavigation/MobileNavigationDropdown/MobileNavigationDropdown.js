import { Component } from "react";
import NavigationLinks from "../../Navigation/NavigationLinks/NavigationLinks";
import styles from "./MobileNavigationDropdown.module.scss";

class MobileNavigationDropdown extends Component {
  render() {
    return (
      <div className={styles.mobileNavigationDropdown}>
        <NavigationLinks className={styles.navLinks} />
      </div>
    );
  }
}

export default MobileNavigationDropdown;
