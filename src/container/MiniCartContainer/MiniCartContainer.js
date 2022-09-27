import { Component } from "react";
import { connect } from "react-redux";
import ReactDOM from "react-dom";

import styles from "./MiniCartContainer.module.scss";
import { setShowMiniCart } from "../../actions/actions";
import MiniCart from "../../components/miniCart/MiniCart";

class Backdrop extends Component {
  render() {
    return <div className={styles.backdrop} onClick={this.props.onClose} />;
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
    const { showCart } = this.props;
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
});

const mapDispatchToProps = (dispatch) => ({
  onSetShowCart: (showCart) => dispatch(setShowMiniCart(showCart)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MiniCartContainer);
