import { Component } from "react";
import { connect } from "react-redux";
import { setCheckOut } from "../../../actions/actions";
import styles from "./CartOrderButton.module.scss";

class CartOrderButton extends Component {
  render() {
    const handleCheckOut = () => {
      this.props.onSetCheckOut();
      alert("Your order has been placed!");
    };
    return (
      <button className={styles.cartOrderButton} onClick={handleCheckOut}>
        Order
      </button>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onSetCheckOut: () => dispatch(setCheckOut()),
});

export default connect(null, mapDispatchToProps)(CartOrderButton);
