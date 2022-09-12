import { Component } from "react";
import { connect } from "react-redux";
import { Query } from "@apollo/client/react/components";
import { gql } from "@apollo/client";
import { Link } from "react-router-dom";
import styles from "./ProductCard.module.scss";
import CartIcon from "../ProductCartIcon/CartIcon";
import OutOfStock from "../OutOfStock/OutOfStock";

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
class ProductCard extends Component {
  render() {
    const { currency, category } = this.props;
    return (
      <Query query={GET_PRODUCTS}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading…</p>;
          if (error) return <p>Error :(</p>;
          const products =
            category === "all"
              ? data.category.products
              : Array.from(data.category.products).filter(
                  (cat) => cat.category === category
                );
          return products.map((product) => (
            <Link
              className={`${styles.productCard} ${
                product.inStock ? null : styles.noStock
              }`}
              key={product.id}
              to={{
                pathname: `/product/${product.id}`,
              }}
            >
              <img
                src={product.gallery[0]}
                alt="product"
                className={styles.productPicture}
              />
              {product.inStock && <CartIcon className={styles.addCartButton} />}
              {!product.inStock && <OutOfStock />}
              <span className={styles.productName}>{product.name}</span>
              <span className={styles.productPrice}>
                {product.prices.map(
                  (cur) =>
                    cur.currency.symbol === currency &&
                    ` ${cur.currency.symbol}${cur.amount}`
                )}
              </span>
            </Link>
          ));
        }}
      </Query>
    );
  }
}

const mapStateToProps = (state) => ({
  currency: state.currency,
  category: state.category,
});

export default connect(mapStateToProps)(ProductCard);
