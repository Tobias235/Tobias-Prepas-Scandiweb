import { Component } from "react";
import styles from "./ImageGallery.module.scss";

class ImageGallery extends Component {
  state = {
    showPicture: 0,
  };

  handleImageClick = (e) => {
    this.setState({ showPicture: Number(e.target.id) });
  };

  render() {
    const { product } = this.props;
    const { showPicture } = this.state;
    return (
      <div className={styles.galleryPics}>
        <div className={styles.gallerySideBar}>
          {product.map((picture, i) => {
            return (
              <img
                src={picture}
                alt="placeholder"
                className={`${styles.galleryImage} ${
                  showPicture === i && styles.active
                }`}
                key={picture}
                id={i}
                onClick={this.handleImageClick}
              />
            );
          })}
        </div>
        <img
          src={product[showPicture]}
          alt="placeholder"
          className={styles.image}
        />
      </div>
    );
  }
}

export default ImageGallery;
