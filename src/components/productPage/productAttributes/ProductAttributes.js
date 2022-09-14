import { Component } from "react";
import styles from "./ProductAttributes.module.scss";

class ProductAttributes extends Component {
  state = {
    options: [],
  };

  updateState = (options) => {
    this.setState({ ...options });
  };

  handleActive = (e) => {
    const { options } = this.state;
    const parentElement = e.target.parentElement.children[0].innerHTML.replace(
      ":",
      ""
    );

    if (options.some((option) => option.name === parentElement)) {
      return this.setState((prevState) => ({
        options: prevState.options.map((option) =>
          option.name === parentElement
            ? { ...option, value: e.target.id }
            : option
        ),
      }));
    }

    options.push({ name: parentElement, value: e.target.id });
    this.updateState(options);
  };
  render() {
    const { product } = this.props;
    const { options } = this.state;

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
                const active = options.some(
                  (option) =>
                    option.name === attribute.name &&
                    option.value === item.value
                );
                return (
                  <span
                    className={`${styles.attribute} ${styleClass} ${
                      active ? styles.active : null
                    }`}
                    key={i}
                    id={item.value}
                    style={{
                      backgroundColor:
                        attribute.type === "swatch" && `${item.value}`,
                    }}
                    onClick={this.handleActive}
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

export default ProductAttributes;
