import { Query } from "@apollo/client/react/components";
import { Component } from "react";
import { connect } from "react-redux";
import { handleGetProductsByCategory } from "../../../Utils/HandleFetchDataRequests";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductGrid.module.scss";

class ProductGrid extends Component {
  render() {
    return (
      <div className={styles.productGrid}>
        <Query query={handleGetProductsByCategory(this.props.category)}>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading…</p>;
            if (error) return <p>Error :(</p>;
            return data.category.products.map((product) => {
              return <ProductCard product={product} key={product.id} />;
            });
          }}
        </Query>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currency: state.activeReducer.currency,
  category: state.activeReducer.category,
});

export default connect(mapStateToProps)(ProductGrid);
