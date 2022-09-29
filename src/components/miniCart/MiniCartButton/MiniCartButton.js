import { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import styles from "./MiniCartButton.module.scss";
import { setCheckOut, setShowMiniCart } from "../../../actions/actions";

class MiniCartButton extends Component {
  handleCheckOut = () => {
    this.props.onSetCheckOut();
    alert("Your order has been placed!");
  };

  handleCloseModal = () => {
    this.props.onSetShowCart(false);
  };

  render() {
    return (
      <div className={styles.miniCartButton}>
        <NavLink
          type="button"
          className={styles.viewBag}
          onClick={this.handleCloseModal}
          to={{
            pathname: `/cart/${Math.floor(Math.random() * 1000000)}`,
          }}
        >
          VIEW BAG
        </NavLink>
        <button
          type="button"
          className={styles.checkout}
          onClick={this.handleCheckOut}
        >
          CHECK OUT
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onSetCheckOut: () => dispatch(setCheckOut()),
  onSetShowCart: (showCart) => dispatch(setShowMiniCart(showCart)),
});

export default connect(null, mapDispatchToProps)(MiniCartButton);
