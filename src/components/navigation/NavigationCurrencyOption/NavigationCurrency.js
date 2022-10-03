import { Component } from "react";
import { gql } from "@apollo/client";
import { Query } from "@apollo/client/react/components";
import { connect } from "react-redux";
import styles from "./NavigationCurrency.module.scss";
import arrowUp from "../../../assets/images/arrowUp.svg";
import arrowDown from "../../../assets/images/arrowDown.svg";
import {
  setChangeCurrency,
  setShowCurrencyModal,
} from "../../../actions/actions";
import NavigationCartIcon from "../NavigationCart/NavigationCartIcon";
import { Backdrop } from "../../../container/MiniCartContainer/MiniCartContainer";

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
  handleButtonClick = () => {
    if (this.props.showCart) return;
    this.props.onShowCurrencyModal(!this.props.showCurrencyModal);
  };

  selectCurrency = (e) => {
    this.props.onChangeCurrency(e.target.id);
    this.props.onShowCurrencyModal(false);
  };

  handleCloseModal = () => {
    this.props.onShowCurrencyModal(false);
  };

  render() {
    const { currency, showCurrencyModal } = this.props;

    return (
      <div className={styles.navigationCurrency}>
        {showCurrencyModal && (
          <Backdrop
            onClose={this.handleCloseModal}
            className={styles.background}
          />
        )}
        <button onClick={this.handleButtonClick}>
          {currency}
          {showCurrencyModal ? (
            <img src={arrowUp} alt="ArrowIcon Up" />
          ) : (
            <img src={arrowDown} alt="ArrowIcon Down" />
          )}
        </button>
        {showCurrencyModal && (
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
  currency: state.rootReducer.currency,
  showCart: state.rootReducer.showCart,
  showCurrencyModal: state.rootReducer.showCurrencyModal,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeCurrency: (currency) => dispatch(setChangeCurrency(currency)),
  onShowCurrencyModal: (currencyModal) =>
    dispatch(setShowCurrencyModal(currencyModal)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavigationCurrency);
