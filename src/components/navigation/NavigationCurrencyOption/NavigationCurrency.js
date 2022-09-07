import { Component } from "react";
import { gql } from "@apollo/client";
import { Query } from "@apollo/client/react/components";
import styles from "./NavigationCurrency.module.scss";
import arrowUp from "../../../assets/images/arrowUp.svg";
import arrowDown from "../../../assets/images/arrowDown.svg";

const GET_CURRENCIES = gql`
  query {
    category {
      products {
        prices {
          currency {
            symbol
            label
          }
        }
      }
    }
  }
`;

const data = (
  <Query query={GET_CURRENCIES}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading…</p>;
      if (error) return <p>Error :(</p>;
      return data.category.products[0].prices.map((currency) => (
        <span key={currency.currency.label}>
          {currency.currency.symbol} {currency.currency.label}
        </span>
      ));
    }}
  </Query>
);

class NavigationCurrency extends Component {
  render() {
    return (
      <div className={styles.navigationCurrency}>
        <span>$</span>
        <img src={arrowUp} alt="ArrowIcon Up" />
        <img src={arrowDown} alt="ArrowIcon Up" />
        <div className={styles.currencyOptions}>{data}</div>
      </div>
    );
  }
}

export default NavigationCurrency;
