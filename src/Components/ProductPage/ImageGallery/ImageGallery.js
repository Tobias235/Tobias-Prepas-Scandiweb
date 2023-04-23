import { Component } from "react";
import styles from "./ImageGallery.module.scss";

class ImageGallery extends Component {
  state = {
    showPicture: 0,
  };

  handleImageClick = (e) => {
    this.setState({ showPicture: e.target.id });
  };

  render() {
    const { product } = this.props;
    const { showPicture } = this.state;
    return (
      <div className={styles.galleryPicturesContainer}>
        <div className={styles.gallerySideBar}>
          {product.map((picture, i) => {
            return (
              <div className={styles.sidebarContainer} key={picture}>
                <img
                  src={picture}
                  alt={`Thumbnail ${i}`}
                  className={styles.sideBarImage}
                  id={i}
                  onClick={this.handleImageClick}
                />
              </div>
            );
          })}
        </div>
        <img
          src={product[showPicture]}
          alt="Product"
          className={styles.mainImage}
        />
      </div>
    );
  }
}

export default ImageGallery;
