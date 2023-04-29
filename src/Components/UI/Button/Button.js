import { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.scss";

class Button extends Component {
  render() {
    const { className, onClick, disabled, text } = this.props;
    return (
      <button
        type="button"
        className={`${styles.button} ${className}`}
        onClick={onClick}
        disabled={disabled}
      >
        {text}
      </button>
    );
  }
}

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  text: PropTypes.string.isRequired,
};

export default Button;
