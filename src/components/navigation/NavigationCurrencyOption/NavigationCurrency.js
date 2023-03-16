import { Component } from "react";
import { Query } from "@apollo/client/react/components";
import { connect } from "react-redux";
import styles from "./NavigationCurrency.module.scss";
import arrowUp from "../../../Assets/Images/arrowUp.svg";
import arrowDown from "../../../Assets/Images/arrowDown.svg";
import { setChangeCurrency } from "../../../actions/ActiveAction";
import { setShowCurrencyModal } from "../../../actions/ModalAction";
import NavigationCartIcon from "../NavigationCart/NavigationCartIcon";
import Backdrop from "../../UI/Backdrop/Backdrop";
import { handleGetCurrencies } from "../../../Utils/HandleFetchDataRequests";

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
      <div className={`${styles.navigationCurrency} ${this.props.className}`}>
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
            <Query query={handleGetCurrencies()}>
              {({ loading, error, data }) => {
                if (loading) return <p>Loading…</p>;
                if (error) return <p>Error :(</p>;
                return data.currencies.map((cur) => (
                  <span
                    key={cur.label}
                    id={cur.symbol}
                    className={
                      currency === cur.symbol ? styles.activeCurrency : null
                    }
                    onClick={this.selectCurrency}
                  >
                    {cur.symbol} {cur.label}
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
  currency: state.activeReducer.currency,
  showCart: state.modalReducer.showCart,
  showCurrencyModal: state.modalReducer.showCurrencyModal,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeCurrency: (currency) => dispatch(setChangeCurrency(currency)),
  onShowCurrencyModal: (currencyModal) =>
    dispatch(setShowCurrencyModal(currencyModal)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavigationCurrency);
