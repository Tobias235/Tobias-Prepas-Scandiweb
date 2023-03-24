import { Component } from "react";
import styles from "./Backdrop.module.scss";

class Backdrop extends Component {
  render() {
    return (
      <div
        className={`${styles.backdrop} ${this.props.className}`}
        onClick={this.props.onClose}
      />
    );
  }
}

export default Backdrop;
