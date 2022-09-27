import { Component } from "react";
import styles from "./MiniCartTotal.module.scss";

class MiniCartTotal extends Component {
  state = {
    total: 0,
    totalArray: [],
  };

  handleTotalValue = () => {
    const { totalArray } = this.state;
    const { cart, currency } = this.props;
    let totalValue;
    let initial;

    this.setState({
      total: 0,
      totalArray: [],
    });

    cart.map((cart) => {
      cart.prices.map((price) => {
        if (price.currency.symbol === currency) {
          totalArray.push(price.amount * cart.quantity);
          initial = 0;
          totalValue = totalArray.reduce(
            (previousValue, currentValue) => previousValue + currentValue,
            initial
          );
        }
        return this.setState({ total: totalValue });
      });
      return cart;
    });
  };

  componentDidMount() {
    this.handleTotalValue();
  }

  componentDidUpdate(prevProps) {
    for (let i = 0; i < this.props.cart.length; i++) {
      if (
        this.props.cart[i].quantity !== prevProps.cart[i].quantity ||
        this.props.cart.length !== prevProps.cart.length
      ) {
        this.handleTotalValue();
      }
    }
  }
  render() {
    const { total } = this.state;
    const { currency } = this.props;
    return (
      <div className={styles.miniCartTotal}>
        <span className={styles.total}>Total:</span>
        <span className={styles.amount}>
          {currency} {total}
        </span>
      </div>
    );
  }
}

export default MiniCartTotal;
