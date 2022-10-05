import { Component } from "react";
import { gql } from "@apollo/client";
import { Query } from "@apollo/client/react/components";
import { connect } from "react-redux";
import ImageGallery from "../../components/productPage/imageGallery/ImageGallery";
import ProductAttributes from "../../components/productPage/productAttributes/ProductAttributes";
import ProductButton from "../../components/productPage/productButton/ProductButton";
import ProductDescription from "../../components/productPage/productDescription/ProductDescription";
import BrandName from "../../components/utils/BrandName/BrandName";
import Price from "../../components/utils/Price/Price";
import styles from "./Product.module.scss";

const GET_PRODUCTS = gql`
  query {
    category {
      name
      products {
        id
        name
        brand
        gallery
        inStock
        category
        description
        attributes {
          type
          name
          items {
            value
          }
        }
        prices {
          currency {
            symbol
            label
          }
          amount
        }
      }
    }
  }
`;

class Product extends Component {
  render() {
    const { productId, currency } = this.props;

    return (
      <Query query={GET_PRODUCTS}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading…</p>;
          if (error) return <p>Error :(</p>;
          const products =
            productId === "all"
              ? data.category.products
              : Array.from(data.category.products).filter(
                  (product) => product.id === productId
                );
          return products.map((product) => (
            <main className={styles.product} key={product.id}>
              <ImageGallery product={product.gallery} />
              <div className={styles.spacer}></div>
              <section className={styles.descriptionContainer}>
                <BrandName product={product} />
                <ProductAttributes product={product} />
                <span className={styles.price}>PRICE:</span>
                <Price product={product} currency={currency} />
                <ProductButton product={product} />
                <ProductDescription product={product} />
              </section>
            </main>
          ));
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
