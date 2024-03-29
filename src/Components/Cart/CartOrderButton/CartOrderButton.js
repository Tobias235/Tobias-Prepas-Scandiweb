import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { resetCart } from "../../../Actions/CartAction";
import Button from "../../UI/Button/Button";
import styles from "./CartOrderButton.module.scss";

class CartOrderButton extends Component {
  handleCheckOut = () => {
    const { onSetCheckOut } = this.props;
    onSetCheckOut();
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

CartOrderButton.propTypes = {
  onSetCheckOut: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onSetCheckOut: () => dispatch(resetCart()),
});

export default connect(null, mapDispatchToProps)(CartOrderButton);
