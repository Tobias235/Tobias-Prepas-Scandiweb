import { Component } from "react";
import { connect } from "react-redux";
import styles from "./MiniCartTotal.module.scss";

class MiniCartTotal extends Component {
  render() {
    const { currencySymbol, totalValue } = this.props;
    return (
      <div className={styles.miniCartTotal}>
        <span className={styles.total}>Total:</span>
        <span className={styles.amount}>
          {currencySymbol} {totalValue.toFixed(2)}
        </span>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  totalValue: state.cartReducer.totalValue,
});

export default connect(mapStateToProps, null)(MiniCartTotal);
