import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setShowMiniCart } from "../../../Actions/ModalAction";
import cartIcon from "../../../Assets/Images/cart.svg";
import MiniCartQuantityCircle from "../../MiniCart/MiniCartQuantityCircle/MiniCartQuantityCircle";
import styles from "./NavigationCartIcon.module.scss";

class NavigationCartIcon extends Component {
  handleOpenCart = () => {
    const { showCart, onSetShowCart } = this.props;
    onSetShowCart(!showCart);
  };

  render() {
    return (
      <span className={styles.navigationCartIcon} onClick={this.handleOpenCart}>
        <img src={cartIcon} alt="Cart Icon" />
        <MiniCartQuantityCircle />
      </span>
    );
  }
}

NavigationCartIcon.propTypes = {
  showCart: PropTypes.bool.isRequired,
  showCurrencyModal: PropTypes.bool.isRequired,
  onSetShowCart: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  showCart: state.modalReducer.showCart,
  showCurrencyModal: state.modalReducer.showCurrencyModal,
});

const mapDispatchToProps = (dispatch) => ({
  onSetShowCart: (showCart) => dispatch(setShowMiniCart(showCart)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavigationCartIcon);
