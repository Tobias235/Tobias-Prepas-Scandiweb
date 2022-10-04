import { Component } from "react";
import { connect } from "react-redux";
import { setCheckOut } from "../../../actions/actions";
import Button from "../../utils/Button/Button";
import styles from "./CartOrderButton.module.scss";

class CartOrderButton extends Component {
  handleCheckOut = () => {
    this.props.onSetCheckOut();
    alert("Your order has been placed!");
  };
  render() {
    return (
      <Button
        text="Order"
        className={styles.cartOrderButton}
        onClick={this.handleCheckOut}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onSetCheckOut: () => dispatch(setCheckOut()),
});

export default connect(null, mapDispatchToProps)(CartOrderButton);
