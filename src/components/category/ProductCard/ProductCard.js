import { Component } from "react";
import { connect } from "react-redux";
import { Query } from "@apollo/client/react/components";
import { gql } from "@apollo/client";
import { Link } from "react-router-dom";
import styles from "./ProductCard.module.scss";
import CartIcon from "../ProductCartIcon/CartIcon";
import OutOfStock from "../OutOfStock/OutOfStock";
import { setProductId } from "../../../actions/actions";

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
          id
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
  handleGetId = (e) => {
    this.props.onGetProductId(e.target.id);
  };
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
              id={product.id}
              to={{
                pathname: `/product/${product.id}`,
              }}
              onClick={this.handleGetId}
            >
              <img
                src={product.gallery[0]}
                alt="product"
                className={styles.productPicture}
              />
              {product.inStock && (
                <CartIcon className={styles.addCartButton} id={product.id} />
              )}
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

const mapDispatchToProps = (dispatch) => ({
  onGetProductId: (id) => dispatch(setProductId(id)),
});

const mapStateToProps = (state) => ({
  currency: state.currency,
  category: state.category,
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
