import { Component } from "react";
import { connect } from "react-redux";
import styles from "./Price.module.scss";

class Price extends Component {
  render() {
    const { cartItem, product, currencySymbol, className } = this.props;

    const item = cartItem || product;
    return (
      <span className={`${styles.price} ${className}`}>
        {item.prices.map((price) => {
          return (
            price.currency.symbol === currencySymbol && (
              <span className={`${styles.amount}`} key={price.currency.symbol}>
                {price.currency.symbol}
                {price.amount.toFixed(2)}
              </span>
            )
          );
        })}
      </span>
    );
  }
}

const mapStateToProps = (state) => ({
  currencySymbol: state.activeReducer.currencySymbol,
});

export default connect(mapStateToProps, null)(Price);
