import { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { setShowMiniCart } from "../../../Actions/ModalAction";
import { resetCart } from "../../../Actions/CartAction";
import Button from "../../UI/Button/Button";
import styles from "./MiniCartButton.module.scss";

class MiniCartButton extends Component {
  handleCheckOut = () => {
    const { onSetShowCart, onSetCheckOut } = this.props;
    alert("Your order has been placed!");
    onSetShowCart(false);
    onSetCheckOut();
  };

  handleCloseModal = () => {
    const { onSetShowCart } = this.props;

    onSetShowCart(false);
  };

  render() {
    const { cartItems } = this.props;
    const isCartEmpty = cartItems.length === 0 ? true : false;
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
          disabled={isCartEmpty}
          className={isCartEmpty ? styles.disabled : null}
        />
      </div>
    );
  }
}

MiniCartButton.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.any).isRequired,
  onSetShowCart: PropTypes.func.isRequired,
  onSetCheckOut: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onSetCheckOut: () => dispatch(resetCart()),
  onSetShowCart: (showCart) => dispatch(setShowMiniCart(showCart)),
});

const mapStateToProps = (state) => ({
  cartItems: state.cartReducer.cartItems,
});

export default connect(mapStateToProps, mapDispatchToProps)(MiniCartButton);
