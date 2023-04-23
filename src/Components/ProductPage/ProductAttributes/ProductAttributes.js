import { Component } from "react";
import { connect } from "react-redux";
import { setSelectedAttributes } from "../../../Actions/ActiveAction";
import styles from "./ProductAttributes.module.scss";

class ProductAttributes extends Component {
  state = {
    options: {},
  };

  handleActive = (e) => {
    const { options } = this.state;
    const { updateSelectedAttributes } = this.props;
    const parentElement =
      e.target.parentElement.children[0].textContent.replace(":", "");

    const newOptions = {
      ...options,
      [parentElement]: e.target.id,
    };

    updateSelectedAttributes(newOptions);

    this.setState({ options: newOptions });
  };

  render() {
    const { product } = this.props;
    const { options } = this.state;

    return (
      <div>
        {product.attributes.map((attribute, i) => {
          return (
            <div className={styles.attributesContainer} key={i}>
              <p className={styles.attributeName}>{attribute.name}:</p>
              {attribute.items.map((item) => {
                const isAttributeTypeColor =
                  attribute.type === "swatch"
                    ? styles.colorAttribute
                    : styles.attributeOptions;
                const isAttributeActive = Object.entries(options).some(
                  (option) =>
                    option[0] === attribute.name && option[1] === item.value
                );
                const outOfStock = !product.inStock ? styles.inStock : null;
                return (
                  <span
                    className={`${
                      styles.attribute
                    } ${isAttributeTypeColor} ${outOfStock} ${
                      isAttributeActive ? styles.active : null
                    }`}
                    key={item.value}
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

const mapDispatchToProps = (dispatch) => ({
  updateSelectedAttributes: (selectedAttributes) =>
    dispatch(setSelectedAttributes(selectedAttributes)),
});

const mapStateToProps = (state) => ({
  selectedAttributes: state.activeReducer.selectedAttributes,
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductAttributes);
