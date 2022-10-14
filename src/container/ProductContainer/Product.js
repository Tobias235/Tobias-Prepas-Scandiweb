import { Component } from "react";
import { Query } from "@apollo/client/react/components";
import { connect } from "react-redux";
import ImageGallery from "../../components/productPage/imageGallery/ImageGallery";
import ProductAttributes from "../../components/productPage/productAttributes/ProductAttributes";
import ProductButton from "../../components/productPage/productButton/ProductButton";
import ProductDescription from "../../components/productPage/productDescription/ProductDescription";
import BrandName from "../../components/utils/BrandName/BrandName";
import Price from "../../components/utils/Price/Price";
import styles from "./Product.module.scss";
import { handleGetProductById } from "../../utils/HandleFetchDataRequests";

class Product extends Component {
  render() {
    const { productId, currency } = this.props;

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
                <Price product={data.product} currency={currency} />
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
  currency: state.activeReducer.currency,
});
export default connect(mapStateToProps)(Product);
