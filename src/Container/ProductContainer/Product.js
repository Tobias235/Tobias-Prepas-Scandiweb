import { Component } from "react";
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
          return (
            <main className={styles.product} key={data.product.id}>
              <ImageGallery product={data.product.gallery} />
              <div className={styles.spacer}></div>
              <section className={styles.descriptionContainer}>
                <BrandName product={data.product} />
                <ProductAttributes product={data.product} />
                <span className={styles.price}>PRICE:</span>
                <Price product={data.product} />
                <ProductButton product={data.product} />
                <ProductDescription product={data.product} />
              </section>
            </main>
          );
        }}
      </Query>
    );
  }
}

const mapStateToProps = (state) => ({
  productId: state.activeReducer.productId,
});
export default connect(mapStateToProps)(Product);
