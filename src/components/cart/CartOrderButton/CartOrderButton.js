import { Component } from "react";
import { connect } from "react-redux";
import { setCheckOut } from "../../../actions/CartAction";
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
        text="ORDER"
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
