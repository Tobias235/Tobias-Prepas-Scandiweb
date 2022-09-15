import { Component } from "react";
import styles from "./CartImage.module.scss";

class CartImage extends Component {
  render() {
    const { gallery } = this.props;
    return (
      <div className={styles.imageSlider} onClick={this.handleChangePicture}>
        <img
          src={gallery[0]}
          alt="placeholder"
          className={`${styles.mainImage}`}
          onClick={this.handleImageClick}
        />
      </div>
    );
  }
}

export default CartImage;
