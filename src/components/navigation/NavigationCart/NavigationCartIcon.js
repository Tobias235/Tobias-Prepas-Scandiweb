import { Component } from "react";
import { connect } from "react-redux";
import { setShowMiniCart } from "../../../actions/actions";
import styles from "./NavigationCartIcon.module.scss";
import cartIcon from "../../../assets/images/cart.svg";
import MiniCartQuantityCircle from "../../miniCart/MiniCartQuantityCircle/MiniCartQuantityCircle";
class NavigationCartIcon extends Component {
  render() {
    const handleOpenCart = () => {
      if (this.props.showCurrencyModal) return;
      if (this.props.showCart) {
        return this.props.onSetShowCart(false);
      } else {
        this.props.onSetShowCart(true);
      }
    };
    return (
      <span className={styles.navigationCartIcon} onClick={handleOpenCart}>
        <img src={cartIcon} alt="Cart Icon" />
        <MiniCartQuantityCircle />
      </span>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.rootReducer.cart,
  showCart: state.rootReducer.showCart,
  showCurrencyModal: state.rootReducer.showCurrencyModal,
});

const mapDispatchToProps = (dispatch) => ({
  onSetShowCart: (showCart) => dispatch(setShowMiniCart(showCart)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavigationCartIcon);
