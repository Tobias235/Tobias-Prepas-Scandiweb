import { Component } from "react";
import { connect } from "react-redux";
import styles from "./Price.module.scss";

class Price extends Component {
  render() {
    const { product, currency } = this.props;
    return (
      <span className={`${styles.price} ${this.props.className}`}>
        {product.prices.map((cur) => {
          return (
            cur.currency.symbol === currency && (
              <span className={`${styles.amount}`} key={cur.currency.symbol}>
                {cur.currency.symbol}
                {cur.amount}
              </span>
            )
          );
        })}
      </span>
    );
  }
}

const mapStateToProps = (state) => ({
  currency: state.activeReducer.currency,
});

export default connect(mapStateToProps, null)(Price);
