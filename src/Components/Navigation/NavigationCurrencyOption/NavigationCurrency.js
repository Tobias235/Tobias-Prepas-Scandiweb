import { Component } from "react";
import { Query } from "@apollo/client/react/components";
import { connect } from "react-redux";
import { handleGetCurrencies } from "../../../Utils/HandleFetchDataRequests";
import { calculateTotalAmount } from "../../../Actions/CartAction";
import { setChangeCurrency } from "../../../Actions/ActiveAction";
import { setShowCurrencyModal } from "../../../Actions/ModalAction";
import arrowUp from "../../../Assets/Images/arrowUp.svg";
import arrowDown from "../../../Assets/Images/arrowDown.svg";
import NavigationCartIcon from "../NavigationCart/NavigationCartIcon";
import Backdrop from "../../UI/Backdrop/Backdrop";
import styles from "./NavigationCurrency.module.scss";

class NavigationCurrency extends Component {
  handleButtonClick = () => {
    const { showCart, onShowCurrencyModal, showCurrencyModal } = this.props;
    if (showCart) return;
    onShowCurrencyModal(!showCurrencyModal);
  };

  selectCurrency = (e) => {
    const { onChangeCurrency, onShowCurrencyModal, onCalculateTotal } =
      this.props;
    onChangeCurrency(e.target.id);
    onShowCurrencyModal(false);
    onCalculateTotal(e.target.id);
  };

  handleCloseModal = () => {
    const { onShowCurrencyModal } = this.props;
    onShowCurrencyModal(false);
  };

  render() {
    const { currencySymbol, showCurrencyModal, className } = this.props;

    return (
      <div className={`${styles.navigationCurrency} ${className}`}>
        {showCurrencyModal && (
          <Backdrop
            onClose={this.handleCloseModal}
            className={styles.background}
          />
        )}
        <button onClick={this.handleButtonClick}>
          {currencySymbol}
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

                const { currencies } = data;

                return currencies.map((currency) => (
                  <span
                    key={currency.label}
                    id={currency.symbol}
                    className={
                      currencySymbol === currency.symbol
                        ? styles.activeCurrency
                        : null
                    }
                    onClick={this.selectCurrency}
                  >
                    {currency.symbol} {currency.label}
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
  currencySymbol: state.activeReducer.currencySymbol,
  showCart: state.modalReducer.showCart,
  showCurrencyModal: state.modalReducer.showCurrencyModal,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeCurrency: (currencySymbol) =>
    dispatch(setChangeCurrency(currencySymbol)),
  onShowCurrencyModal: (currencyModal) =>
    dispatch(setShowCurrencyModal(currencyModal)),
  onCalculateTotal: (currencySymbol) =>
    dispatch(calculateTotalAmount(currencySymbol)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavigationCurrency);
