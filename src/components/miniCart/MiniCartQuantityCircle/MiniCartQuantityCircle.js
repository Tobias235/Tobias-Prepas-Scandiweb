import { Component } from "react";
import { connect } from "react-redux";
import styles from "./MiniCartQuantityCircle.module.scss";

class MiniCartQuantityCircle extends Component {
  render() {
    const { cart } = this.props;
    const quantity = cart
      .map((product) => product.quantity)
      .reduce((prevValue, currValue) => {
        return prevValue + currValue;
      }, 0);

    const showQuantityIcon = quantity > 0 ? true : false;
    return (
      <>
        {showQuantityIcon && (
          <span className={styles.quantityCircle}>{quantity}</span>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(MiniCartQuantityCircle);
