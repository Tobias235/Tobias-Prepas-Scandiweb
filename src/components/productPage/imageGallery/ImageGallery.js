import { Component, PureComponent } from "react";
import styles from "./ImageGallery.module.scss";

class ImageGallery extends PureComponent {
  state = {
    showPicture: 0,
    activePicture: false,
  };

  handleImageClick = (e) => {
    this.setState({
      showPicture: e.target.id,
    });
  };

  render() {
    const { product } = this.props;
    const { activePicture, showPicture } = this.state;
    console.log();
    return (
      <div className={styles.galleryPics}>
        <div className={styles.gallerySideBar}>
          {product.map((picture, i) => {
            return (
              <img
                src={picture}
                alt="placeholder"
                className={styles.galleryImage}
                style={{
                  boxShadow:
                    showPicture === i && "0 1px 5px rgba(94, 206, 123, 0.8)",
                }}
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
