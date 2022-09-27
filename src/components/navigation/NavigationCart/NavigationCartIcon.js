import { Component } from "react";
import { connect } from "react-redux";
import { setShowMiniCart } from "../../../actions/actions";
import styles from "./NavigationCartIcon.module.scss";
import cartIcon from "../../../assets/images/cart.svg";
class NavigationCartIcon extends Component {
  render() {
    const handleOpenCart = () => {
      this.props.onSetShowCart(true);
    };
    return (
      <span className={styles.navigationCartIcon} onClick={handleOpenCart}>
        <img src={cartIcon} alt="Cart Icon" />
      </span>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onSetShowCart: (showCart) => dispatch(setShowMiniCart(showCart)),
});

export default connect(null, mapDispatchToProps)(NavigationCartIcon);
