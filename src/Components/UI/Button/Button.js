import { Component } from "react";
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

export default Button;
