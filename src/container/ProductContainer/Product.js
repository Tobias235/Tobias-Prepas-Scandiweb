import { Component } from "react";
import { gql } from "@apollo/client";
import { Query } from "@apollo/client/react/components";
import { connect } from "react-redux";
import parse from "html-react-parser";
import styles from "./Product.module.scss";
import placeholder from "../../assets/images/placeholder.jpg";

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
          console.log(products[0].prices);
          return products.map((product) => (
            <div className={styles.product} key={product.id}>
              <div className={styles.galleryPics}>
                {product.gallery.map((picture) => {
                  return (
                    <img
                      src={picture}
                      alt="placeholder"
                      className={styles.galleryImage}
                      key={picture}
                    />
                  );
                })}
              </div>
              <div className={styles.productPic}>
                <img
                  src={product.gallery[0]}
                  alt="placeholder"
                  className={styles.image}
                />
              </div>
              <div className={styles.descriptionContainer}>
                <div className={styles.productText}>
                  <div className={styles.productTitles}>
                    <h1>{product.brand}</h1>
                    <h3>{product.name}</h3>
                  </div>
                  {product.attributes.map((attribute) => {
                    return (
                      <div className={styles.attributes} key={Math.random()}>
                        <p className={styles.attributeName}>
                          {attribute.name}:
                        </p>
                        {attribute.items.map((item) => {
                          return (
                            <span
                              className={styles.attribute}
                              key={Math.random()}
                            >
                              {item.value}
                            </span>
                          );
                        })}
                      </div>
                    );
                  })}
                  <span className={styles.price}>
                    Price:
                    {product.prices.map((cur) => {
                      return (
                        cur.currency.symbol === currency && (
                          <span
                            className={styles.amount}
                            key={cur.currency.symbol}
                          >
                            {cur.currency.symbol}
                            {cur.amount}
                          </span>
                        )
                      );
                    })}
                  </span>
                  <button>ADD TO CART</button>
                  <span className={styles.description}>
                    {parse(product.description)}
                  </span>
                </div>
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
