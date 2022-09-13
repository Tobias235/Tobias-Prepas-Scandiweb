import { Component } from "react";
import { gql } from "@apollo/client";
import { Query } from "@apollo/client/react/components";
import { connect } from "react-redux";
import styles from "./Product.module.scss";
import ImageGallery from "../../components/productPage/imageGallery/ImageGallery";
import ProductTitles from "../../components/productPage/productTitles/ProductTitles";
import ProductAttributes from "../../components/productPage/productAttributes/ProductAttributes";
import ProductPrice from "../../components/productPage/productPrice/ProductPrice";
import ProductButton from "../../components/productPage/productButton/ProductButton";
import ProductDescription from "../../components/productPage/productDescription/ProductDescription";

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
            <div className={styles.product} key={product.id}>
              <ImageGallery product={product.gallery} />
              <div className={styles.spacer}></div>
              <div className={styles.descriptionContainer}>
                <ProductTitles product={product} />
                <ProductAttributes product={product} />
                <ProductPrice product={product} currency={currency} />
                <ProductButton />
                <ProductDescription product={product} />
              </div>
            </div>
          ));
        }}
      </Query>
    );
  }
}

const mapStateToProps = (state) => ({
  productId: state.productId,
  currency: state.currency,
});
export default connect(mapStateToProps)(Product);
