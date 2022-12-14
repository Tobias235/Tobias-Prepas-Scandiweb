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
    alert("Your order has been placed!");
    this.props.onSetShowCart(false);
    this.props.onSetCheckOut();
  };

  handleCloseModal = () => {
    this.props.onSetShowCart(false);
  };

  render() {
    const { cart } = this.props;
    const isDisabled = cart.length === 0 ? true : false;
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
        <Button
          text="CHECK OUT"
          onClick={this.handleCheckOut}
          disabled={isDisabled}
          className={isDisabled ? styles.disabled : null}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onSetCheckOut: () => dispatch(setCheckOut()),
  onSetShowCart: (showCart) => dispatch(setShowMiniCart(showCart)),
});

const mapStateToProps = (state) => ({
  cart: state.cartReducer.cart,
});

export default connect(mapStateToProps, mapDispatchToProps)(MiniCartButton);
