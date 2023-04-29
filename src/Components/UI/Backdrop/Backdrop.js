import { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Backdrop.module.scss";

class Backdrop extends Component {
  render() {
    const { className, onClose } = this.props;
    return (
      <div className={`${styles.backdrop} ${className}`} onClick={onClose} />
    );
  }
}

Backdrop.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};

export default Backdrop;
