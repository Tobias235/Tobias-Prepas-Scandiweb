import { Component } from "react";
import styles from "./MiniCartHeader.module.scss";

class MiniCartHeader extends Component {
  state = {
    totalItems: [],
    quantity: 0,
  };

  handleTotalQuantity = () => {
    const { cart } = this.props;
    const { totalItems } = this.state;
    let initial = 0;
    this.setState({ totalItems: [] });

    cart.map((product) => {
      totalItems.push(product.quantity);
      const quantity = totalItems.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        initial
      );
      return this.setState({ quantity: quantity });
    });
  };

  componentDidMount() {
    this.handleTotalQuantity();
  }

  componentDidUpdate(prevProps) {
    for (let i = 0; i < this.props.cart.length; i++) {
      if (
        this.props.cart[i].quantity !== prevProps.cart[i].quantity ||
        this.props.cart.length !== prevProps.cart.length
      ) {
        this.handleTotalQuantity();
      }
    }
  }

  render() {
    const { quantity } = this.state;

    const item = quantity > 1 ? "items" : "item";
    return (
      <h1 className={styles.miniCartHeader}>
        My bag:{" "}
        <span>
          {quantity} {item}
        </span>
      </h1>
    );
  }
}

export default MiniCartHeader;
