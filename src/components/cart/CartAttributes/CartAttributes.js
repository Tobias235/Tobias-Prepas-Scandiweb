import { Component } from "react";
import styles from "./CartAttributes.module.scss";

class CartAttributes extends Component {
  state = {
    options: [],
  };

  render() {
    const { product } = this.props;

    return (
      <div>
        {product.attributes.map((attribute, i) => {
          return (
            <div className={styles.attributes} key={i}>
              <p className={styles.attributeName}>{attribute.name}:</p>
              {attribute.items.map((item, i) => {
                const styleClass =
                  attribute.name === "swatch"
                    ? styles.colorAttribute
                    : styles.attributeOptions;
                const active = product.activeAttributes.some(
                  (option) =>
                    option.name === attribute.name &&
                    option.value === item.value
                );
                const activeColor = product.activeAttributes.some(
                  (option) =>
                    option.name === "Color" && option.value === item.value
                );
                return (
                  <span
                    className={`${styles.attribute} ${styleClass} ${
                      active && styles.active
                    } ${activeColor && styles.activeColor}`}
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
