import { Component } from "react";
import styles from "./Button.module.scss";

class Button extends Component {
  render() {
    return (
      <button
        type="button"
        className={`${styles.button} ${this.props.className}`}
        onClick={this.props.onClick}
        disabled={this.props.disabled}
      >
        {this.props.text}
      </button>
    );
  }
}

export default Button;
