import { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";

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
        <Link
          type="button"
          className={styles.viewBag}
          onClick={this.handleCloseModal}
          to={{
            pathname: `/cart/${uuidv4()}`,
          }}
        >
          VIEW BAG
        </Link>
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
