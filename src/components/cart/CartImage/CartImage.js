import { Component } from "react";
import { ReactComponent as ArrowLeft } from "../../../assets/images/arrowLeft.svg";
import { ReactComponent as ArrowRight } from "../../../assets/images/arrowRight.svg";
import styles from "./CartImage.module.scss";

class CartImage extends Component {
  state = {
    currentImage: 0,
  };
  render() {
    const { product } = this.props;
    const { currentImage } = this.state;

    const showArrow = product.gallery.length - 1;

    const handleNextImage = (e) => {
      if (e.target.id === product.uniqueId && currentImage < showArrow) {
        this.setState({ currentImage: currentImage + 1 });
      } else if (
        e.target.id === product.uniqueId &&
        currentImage === showArrow
      ) {
        this.setState({ currentImage: 0 });
      }
    };

    const handlePrevImage = (e) => {
      if (e.target.id === product.uniqueId && currentImage === 0) {
        this.setState({ currentImage: showArrow });
      } else if (
        e.target.id === product.uniqueId &&
        currentImage <= showArrow
      ) {
        this.setState({ currentImage: currentImage - 1 });
      }
    };

    return (
      <div className={styles.imageSlider}>
        <img
          src={product.gallery[currentImage]}
          alt="placeholder"
          className={`${styles.mainImage}`}
        />
        {showArrow > 1 && (
          <div className={styles.arrowContainer}>
            <div>
              <ArrowLeft
                id={product.uniqueId}
                className={styles.arrowButton}
                onClick={handlePrevImage}
              />
              <ArrowRight
                id={product.uniqueId}
                className={styles.arrowButton}
                onClick={handleNextImage}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default CartImage;
