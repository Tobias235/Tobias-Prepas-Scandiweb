import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ReactDOM from "react-dom";
import { setShowMiniCart } from "../../Actions/ModalAction";
import MiniCart from "../../Components/MiniCart/MiniCart";
import MiniCartTotal from "../../Components/MiniCart/MiniCartTotal/MiniCartTotal";
import MiniCartButton from "../../Components/MiniCart/MiniCartButton/MiniCartButton";
import Backdrop from "../../Components/UI/Backdrop/Backdrop";
import styles from "./MiniCartModal.module.scss";

const portalElement = document.getElementById("overlays");

class MiniCartModal extends Component {
  onCloseCart = () => {
    const { onSetShowCart } = this.props;
    onSetShowCart(false);
  };

  render() {
    const { showCart, cartItems, currencySymbol } = this.props;

    return (
      <>
        {showCart && (
          <div className={styles.miniCartContainer}>
            {ReactDOM.createPortal(
              <Backdrop onClose={this.onCloseCart} />,
              portalElement
            )}
            {ReactDOM.createPortal(
              <div className={styles.modalContainer}>
                {cartItems.length > 0 ? (
                  <MiniCart />
                ) : (
                  <span className={styles.emptyCart}>The cart is empty!</span>
                )}
                <div>
                  {cartItems.length >= 1 && (
                    <MiniCartTotal
                      currencySymbol={currencySymbol}
                      cartItem={cartItems}
                    />
                  )}
                  <MiniCartButton />
                </div>
              </div>,
              portalElement
            )}
          </div>
        )}
      </>
    );
  }
}

MiniCartModal.propTypes = {
  showCart: PropTypes.bool.isRequired,
  cartItems: PropTypes.arrayOf(PropTypes.any).isRequired,
  currencySymbol: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  showCart: state.modalReducer.showCart,
  cartItems: state.cartReducer.cartItems,
  currencySymbol: state.activeReducer.currencySymbol,
});

const mapDispatchToProps = (dispatch) => ({
  onSetShowCart: (showCart) => dispatch(setShowMiniCart(showCart)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MiniCartModal);
