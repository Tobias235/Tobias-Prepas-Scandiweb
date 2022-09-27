import { Component } from "react";
import { NavLink } from "react-router-dom";
import styles from "./MiniCartButton.module.scss";

class MiniCartButton extends Component {
  render() {
    return (
      <div className={styles.miniCartButton}>
        <NavLink
          type="button"
          className={styles.viewBag}
          to={{
            pathname: `/cart/${Math.floor(Math.random() * 1000000)}`,
          }}
        >
          VIEW BAG
        </NavLink>
        <button type="button" className={styles.checkout}>
          CHECK OUT
        </button>
      </div>
    );
  }
}

export default MiniCartButton;
