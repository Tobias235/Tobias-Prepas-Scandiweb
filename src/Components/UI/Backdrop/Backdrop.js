import { Component } from "react";
import styles from "./Backdrop.module.scss";

class Backdrop extends Component {
  render() {
    const { className, onClose } = this.props;
    return (
      <div className={`${styles.backdrop} ${className}`} onClick={onClose} />
    );
  }
}

export default Backdrop;
