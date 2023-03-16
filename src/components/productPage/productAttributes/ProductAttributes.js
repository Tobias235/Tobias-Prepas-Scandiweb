import { Component } from "react";
import { connect } from "react-redux";
import { setActiveAttributes } from "../../../actions/ActiveAction";
import styles from "./ProductAttributes.module.scss";

class ProductAttributes extends Component {
  state = {
    options: {},
  };

  handleActive = (e) => {
    const { options } = this.state;
    const { onGetActiveAttributes } = this.props;
    const parentElement = e.target.parentElement.children[0].innerHTML.replace(
      ":",
      ""
    );

    const newOptions = {
      ...options,
      [parentElement]: e.target.id,
    };

    onGetActiveAttributes(newOptions);

    this.setState({ options: newOptions });
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
                  attribute.type === "swatch"
                    ? styles.colorAttribute
                    : styles.attributeOptions;
                const active = Object.entries(options).some(
                  (option) =>
                    option[0] === attribute.name && option[1] === item.value
                );
                const outOfStock = !product.inStock ? styles.inStock : null;
                return (
                  <span
                    className={`${
                      styles.attribute
                    } ${styleClass} ${outOfStock} ${
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

const mapDispatchToProps = (dispatch) => ({
  onGetActiveAttributes: (attribute) =>
    dispatch(setActiveAttributes(attribute)),
});

const mapStateToProps = (state) => ({
  activeAttributes: state.activeReducer.activeAttributes,
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductAttributes);
