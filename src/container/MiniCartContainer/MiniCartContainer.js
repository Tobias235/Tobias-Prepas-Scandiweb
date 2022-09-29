import { Component } from "react";
import { connect } from "react-redux";
import ReactDOM from "react-dom";
import styles from "./MiniCartContainer.module.scss";
import { setShowMiniCart } from "../../actions/actions";
import MiniCart from "../../components/miniCart/MiniCart";
import MiniCartTotal from "../../components/miniCart/MiniCartTotal/MiniCartTotal";
import MiniCartButton from "../../components/miniCart/MiniCartButton/MiniCartButton";

export class Backdrop extends Component {
  render() {
    return (
      <div
        className={`${styles.backdrop} ${this.props.className}`}
        onClick={this.props.onClose}
      />
    );
  }
}

class ModalContainer extends Component {
  render() {
    return <div className={styles.modalContainer}>{this.props.children}</div>;
  }
}

const portalElement = document.getElementById("overlays");

class MiniCartContainer extends Component {
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
              <ModalContainer>
                <MiniCart />
                <div>
                  {cart && <MiniCartTotal currency={currency} cart={cart} />}
                  <MiniCartButton />
                </div>
              </ModalContainer>,
              portalElement
            )}
          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  showCart: state.showCart,
  cart: state.cart,
  currency: state.currency,
});

const mapDispatchToProps = (dispatch) => ({
  onSetShowCart: (showCart) => dispatch(setShowMiniCart(showCart)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MiniCartContainer);
