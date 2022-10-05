import { Component } from "react";
import { connect } from "react-redux";
import ReactDOM from "react-dom";
import { setShowMiniCart } from "../../actions/ModalAction";
import MiniCart from "../../components/miniCart/MiniCart";
import MiniCartTotal from "../../components/miniCart/MiniCartTotal/MiniCartTotal";
import MiniCartButton from "../../components/miniCart/MiniCartButton/MiniCartButton";
import Backdrop from "../../components/utils/Backdrop/Backdrop";
import styles from "./MiniCartModal.module.scss";

const portalElement = document.getElementById("overlays");

class MiniCartModal extends Component {
  render() {
    const onCloseCart = () => {
      this.props.onSetShowCart(false);
    };
    const { showCart, cart, currency } = this.props;

    return (
      <>
        {showCart && (
          <div className={styles.miniCartContainer}>
            {ReactDOM.createPortal(
              <Backdrop onClose={onCloseCart} />,
              portalElement
            )}
            {ReactDOM.createPortal(
              <div className={styles.modalContainer}>
                {cart.length > 0 ? (
                  <MiniCart />
                ) : (
                  <span className={styles.emptyCart}>Cart is empty! :(</span>
                )}
                <div>
                  {cart.length >= 1 && (
                    <MiniCartTotal currency={currency} cart={cart} />
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

const mapStateToProps = (state) => ({
  showCart: state.modalReducer.showCart,
  cart: state.cartReducer.cart,
  currency: state.activeReducer.currency,
});

const mapDispatchToProps = (dispatch) => ({
  onSetShowCart: (showCart) => dispatch(setShowMiniCart(showCart)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MiniCartModal);
