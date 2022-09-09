import { Component } from "react";
import { connect } from "react-redux";
import { Query } from "@apollo/client/react/components";
import { gql } from "@apollo/client";
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
    const { currency } = this.props;
    return (
      <Query query={GET_PRODUCTS}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading…</p>;
          if (error) return <p>Error :(</p>;
          return data.category.products.map((product) => (
            <div
              className={`${styles.productCard} ${
                product.inStock ? null : styles.noStock
              }`}
              key={product.id}
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
            </div>
          ));
        }}
      </Query>
    );
  }
}

const mapStateToProps = (state) => ({
  currency: state.currency,
});

export default connect(mapStateToProps)(ProductCard);
