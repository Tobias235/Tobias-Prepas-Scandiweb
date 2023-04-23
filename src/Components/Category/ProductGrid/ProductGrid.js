import { Query } from "@apollo/client/react/components";
import { Component } from "react";
import { connect } from "react-redux";
import { handleGetProductsByCategory } from "../../../Utils/HandleFetchDataRequests";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductGrid.module.scss";

class ProductGrid extends Component {
  render() {
    const { category } = this.props;
    return (
      <div className={styles.productGrid}>
        <Query query={handleGetProductsByCategory(category)}>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading…</p>;
            if (error) return <p>Error :(</p>;
            const { category } = data;

            return category.products.map((product) => {
              return <ProductCard product={product} key={product.id} />;
            });
          }}
        </Query>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencySymbol: state.activeReducer.currencySymbol,
  category: state.activeReducer.category,
});

export default connect(mapStateToProps)(ProductGrid);
