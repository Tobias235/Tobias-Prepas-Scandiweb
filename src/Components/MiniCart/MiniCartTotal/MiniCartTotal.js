import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styles from "./MiniCartTotal.module.scss";

class MiniCartTotal extends Component {
  render() {
    const { currencySymbol, totalAmount } = this.props;
    return (
      <div className={styles.miniCartTotal}>
        <span className={styles.total}>Total:</span>
        <span className={styles.amount}>
          {currencySymbol} {totalAmount.toFixed(2)}
        </span>
      </div>
    );
  }
}

MiniCartTotal.propTypes = {
  totalAmount: PropTypes.number.isRequired,
  currencySymbol: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  totalAmount: state.cartReducer.totalAmount,
});

export default connect(mapStateToProps, null)(MiniCartTotal);
