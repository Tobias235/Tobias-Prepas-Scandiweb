import { gql } from "@apollo/client";
import { Query } from "@apollo/client/react/components";
import { Component } from "react";
import { connect } from "react-redux";
import ProductCard from "../ProductCard/ProductCard";

import styles from "./ProductGrid.module.scss";

const GET_PRODUCTS = gql`
  query GetProducts {
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
class ProductGrid extends Component {
  render() {
    const { category } = this.props;
    return (
      <div className={styles.productGrid}>
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
              <ProductCard product={product} key={product.id} />
            ));
          }}
        </Query>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currency: state.currency,
  category: state.category,
});

export default connect(mapStateToProps)(ProductGrid);
