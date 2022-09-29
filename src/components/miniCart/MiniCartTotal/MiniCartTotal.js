import { Component } from "react";
import { HandleProductTotalValues } from "../../../utils/HandleProductTotalValues";
import styles from "./MiniCartTotal.module.scss";

class MiniCartTotal extends Component {
  state = {
    total: 0,
  };

  handleTotalValue = () => {
    const { cart, currency } = this.props;
    let result = HandleProductTotalValues(cart, currency);
    this.setState({ total: result[0].total });
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
          {currency} {total.toFixed(2)}
        </span>
      </div>
    );
  }
}

export default MiniCartTotal;
