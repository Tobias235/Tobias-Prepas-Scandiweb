import { Component } from "react";
import { ReactComponent as ArrowLeft } from "../../../Assets/Images/arrowLeft.svg";
import { ReactComponent as ArrowRight } from "../../../Assets/Images/arrowRight.svg";
import styles from "./CartImage.module.scss";

class CartImage extends Component {
  state = {
    currentImage: 0,
  };

  handleNextImage = (e) => {
    const { cartItem } = this.props;
    const { currentImage } = this.state;
    const showArrow = cartItem.gallery.length - 1;

    if (e.target.id === cartItem.uniqueId && currentImage < showArrow) {
      this.setState({ currentImage: currentImage + 1 });
    } else if (
      e.target.id === cartItem.uniqueId &&
      currentImage === showArrow
    ) {
      this.setState({ currentImage: 0 });
    }
  };

  handlePrevImage = (e) => {
    const { cartItem } = this.props;
    const { currentImage } = this.state;
    const showArrow = cartItem.gallery.length - 1;

    if (e.target.id === cartItem.uniqueId && currentImage === 0) {
      this.setState({ currentImage: showArrow });
    } else if (e.target.id === cartItem.uniqueId && currentImage <= showArrow) {
      this.setState({ currentImage: currentImage - 1 });
    }
  };

  render() {
    const { cartItem } = this.props;
    const { currentImage } = this.state;
    const showArrow = cartItem.gallery.length - 1;

    return (
      <div className={styles.imageSlider}>
        <img
          src={cartItem.gallery[currentImage]}
          alt="placeholder"
          className={`${styles.mainImage}`}
        />
        {showArrow > 1 && (
          <div className={styles.arrowContainer}>
            <div>
              <ArrowLeft
                id={cartItem.uniqueId}
                className={styles.arrowButton}
                onClick={this.handlePrevImage}
              />
              <ArrowRight
                id={cartItem.uniqueId}
                className={styles.arrowButton}
                onClick={this.handleNextImage}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default CartImage;
