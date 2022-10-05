import { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { setShowMiniCart } from "../../../actions/ModalAction";
import { setCheckOut } from "../../../actions/CartAction";
import Button from "../../utils/Button/Button";
import styles from "./MiniCartButton.module.scss";

class MiniCartButton extends Component {
  handleCheckOut = () => {
    this.props.onSetCheckOut();
    alert("Your order has been placed!");
    this.props.onSetShowCart(false);
  };

  handleCloseModal = () => {
    this.props.onSetShowCart(false);
  };

  render() {
    return (
      <div className={styles.miniCartButton}>
        <Link
          className={styles.viewBag}
          onClick={this.handleCloseModal}
          to={{
            pathname: `/cart/${uuidv4()}`,
          }}
        >
          VIEW BAG
        </Link>
        <Button text="CHECK OUT" onClick={this.handleCheckOut} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onSetCheckOut: () => dispatch(setCheckOut()),
  onSetShowCart: (showCart) => dispatch(setShowMiniCart(showCart)),
});

export default connect(null, mapDispatchToProps)(MiniCartButton);
