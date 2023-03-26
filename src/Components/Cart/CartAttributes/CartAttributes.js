import { Component } from "react";
import styles from "./CartAttributes.module.scss";

class CartAttributes extends Component {
  state = {
    options: [],
  };

  render() {
    const { cartItem } = this.props;

    return (
      <div>
        {cartItem.attributes.map((attribute, i) => {
          return (
            <div
              className={`${styles.attributes} ${this.props.attributeOptions}`}
              key={i}
            >
              <p className={`${styles.attributeName} ${this.props.className}`}>
                {attribute.name}:
              </p>
              {attribute.items.map((item, i) => {
                const styleClass =
                  attribute.type === "swatch"
                    ? styles.colorAttribute
                    : styles.attributeOptions;
                const active =
                  cartItem.selectedAttributes[attribute.name] === item.value;
                const activeColor =
                  attribute.name === "Color" &&
                  cartItem.selectedAttributes[attribute.name] === item.value;
                return (
                  <span
                    className={`${styles.attribute} ${styleClass} ${
                      active && styles.active
                    } ${activeColor && styles.activeColor} ${
                      this.props.attributeStyle
                    }`}
                    key={i}
                    id={item.value}
                    style={{
                      backgroundColor:
                        attribute.type === "swatch" && `${item.value}`,
                    }}
                  >
                    {attribute.type !== "swatch" && `${item.value}`}
                  </span>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
}

export default CartAttributes;
