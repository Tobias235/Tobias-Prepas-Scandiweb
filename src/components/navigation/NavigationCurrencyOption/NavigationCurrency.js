import { Component } from "react";
import { gql } from "@apollo/client";
import { Query } from "@apollo/client/react/components";
import { connect } from "react-redux";
import styles from "./NavigationCurrency.module.scss";
import arrowUp from "../../../assets/images/arrowUp.svg";
import arrowDown from "../../../assets/images/arrowDown.svg";
import { setChangeCurrency } from "../../../actions/actions";
import NavigationCartIcon from "../NavigationCart/NavigationCartIcon";

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
class NavigationCurrency extends Component {
  state = {
    showModal: false,
  };
  handleButtonClick = () => {
    this.setState((prev) => {
      return { showModal: !prev.showModal };
    });
  };

  selectCurrency = (e) => {
    this.props.onChangeCurrency(e.target.id);
    this.setState({
      showModal: false,
    });
  };

  render() {
    const { showModal } = this.state;
    const { currency } = this.props;

    return (
      <div className={styles.navigationCurrency}>
        <button onClick={this.handleButtonClick}>
          {currency}
          {showModal && <img src={arrowUp} alt="ArrowIcon Up" />}
          {!showModal && <img src={arrowDown} alt="ArrowIcon Down" />}
        </button>
        {showModal && (
          <div className={styles.currencyOptions}>
            <Query query={GET_CURRENCIES}>
              {({ loading, error, data }) => {
                if (loading) return <p>Loading…</p>;
                if (error) return <p>Error :(</p>;
                return data.category.products[0].prices.map((currencies) => (
                  <span
                    key={currencies.currency.label}
                    id={currencies.currency.symbol}
                    onClick={this.selectCurrency}
                  >
                    {currencies.currency.symbol} {currencies.currency.label}
                  </span>
                ));
              }}
            </Query>
          </div>
        )}
        <NavigationCartIcon />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currency: state.currency,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeCurrency: (currency) => dispatch(setChangeCurrency(currency)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavigationCurrency);
