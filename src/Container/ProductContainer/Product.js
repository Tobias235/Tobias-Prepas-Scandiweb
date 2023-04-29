import { Component } from "react";
import PropTypes from "prop-types";
import { Query } from "@apollo/client/react/components";
import { connect } from "react-redux";
import ImageGallery from "../../Components/ProductPage/ImageGallery/ImageGallery";
import ProductAttributes from "../../Components/ProductPage/ProductAttributes/ProductAttributes";
import ProductButton from "../../Components/ProductPage/ProductButton/ProductButton";
import ProductDescription from "../../Components/ProductPage/ProductDescription/ProductDescription";
import BrandName from "../../Components/UI/BrandName/BrandName";
import Price from "../../Components/UI/Price/Price";
import styles from "./Product.module.scss";
import { handleGetProductById } from "../../Utils/HandleFetchDataRequests";

class Product extends Component {
  render() {
    const { productId } = this.props;

    return (
      <Query query={handleGetProductById(productId)}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading…</p>;
          if (error) return <p>Error :(</p>;

          const { product } = data;
          return (
            <main className={styles.product} key={product.id}>
              <ImageGallery product={product.gallery} />
              <div className={styles.spacer}></div>
              <section className={styles.descriptionContainer}>
                <BrandName product={product} />
                <ProductAttributes product={product} />
                <span className={styles.price}>PRICE:</span>
                <Price product={product} />
                <ProductButton product={product} />
                <ProductDescription product={product} />
              </section>
            </main>
          );
        }}
      </Query>
    );
  }
}

Product.propTypes = {
  productId: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  productId: state.activeReducer.productId,
});
export default connect(mapStateToProps)(Product);
