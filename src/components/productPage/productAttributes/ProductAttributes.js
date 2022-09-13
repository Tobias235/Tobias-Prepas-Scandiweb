import { Component } from "react";
import styles from "./ProductAttributes.module.scss";

class ProductAttributes extends Component {
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
                  attribute.name === "Color"
                    ? styles.colorAttribute
                    : styles.attributeOptions;

                return (
                  <span
                    className={`${styles.attribute} ${styleClass}`}
                    key={i}
                    style={{
                      backgroundColor:
                        attribute.name === "Color" && `${item.value}`,
                    }}
                  >
                    {attribute.name !== "Color" && `${item.value}`}
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

export default ProductAttributes;
