import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setShowMobileNav } from "../../Actions/ModalAction";
import { ReactComponent as BurgerIcon } from "../../Assets/Images/burgerIcon.svg";
import Backdrop from "../UI/Backdrop/Backdrop";
import MobileNavigationDropdown from "./MobileNavigationDropdown/MobileNavigationDropdown";
import NavigationLogo from "../Navigation/NavigationLogo/NavigationLogo";
import NavigationCurrency from "../Navigation/NavigationCurrencyOption/NavigationCurrency";
import styles from "./MobileNavigation.module.scss";

class MobileNavigation extends Component {
  render() {
    const { onShowMobileNav, mobileNav } = this.props;
    return (
      <>
        <nav className={styles.mobileNavigationContainer}>
          <BurgerIcon
            className={styles.burgerIcon}
            onClick={() => {
              onShowMobileNav(true);
            }}
          />
          <NavigationLogo className={styles.logo} />
          <NavigationCurrency className={styles.currencyCart} />
        </nav>

        {mobileNav && (
          <>
            <MobileNavigationDropdown />
            <Backdrop onClose={() => onShowMobileNav(false)} />
          </>
        )}
      </>
    );
  }
}

MobileNavigation.propTypes = {
  mobileNav: PropTypes.bool.isRequired,
  onShowMobileNav: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onShowMobileNav: (mobileNav) => dispatch(setShowMobileNav(mobileNav)),
});

const mapStateToProps = (state) => ({
  mobileNav: state.modalReducer.mobileNav,
});

export default connect(mapStateToProps, mapDispatchToProps)(MobileNavigation);
