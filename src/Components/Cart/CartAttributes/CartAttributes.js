import { Component } from "react";
import styles from "./CartAttributes.module.scss";

class CartAttributes extends Component {
  render() {
    const { cartItem, attributeOptions, className, attributeStyle } =
      this.props;

    return (
      <div>
        {cartItem.attributes.map((attribute, i) => {
          return (
            <div className={`${styles.attributes} ${attributeOptions}`} key={i}>
              <p className={`${styles.attributeName} ${className}`}>
                {attribute.name}:
              </p>
              {attribute.items.map((item, i) => {
                const isAttributeTypeColor =
                  attribute.type === "swatch"
                    ? styles.colorAttribute
                    : styles.attributeOptions;
                const isAttributeActive =
                  cartItem.selectedAttributes[attribute.name] === item.value;
                const activeAttributeColor =
                  attribute.name === "Color" &&
                  cartItem.selectedAttributes[attribute.name] === item.value;
                return (
                  <span
                    className={`${styles.attribute} ${isAttributeTypeColor} ${
                      isAttributeActive && styles.active
                    } ${
                      activeAttributeColor && styles.activeColor
                    } ${attributeStyle}`}
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
