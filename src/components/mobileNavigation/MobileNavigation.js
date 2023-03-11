import { Component } from "react";
import { connect } from "react-redux";
import { setShowMobileNav } from "../../actions/ModalAction";
import { ReactComponent as BurgerIcon } from "../../assets/images/burgerIcon.svg";
import Backdrop from "../utils/Backdrop/Backdrop";
import MobileNavigationDropdown from "./MobileNavigationDropdown/MobileNavigationDropdown";
import styles from "./MobileNavigation.module.scss";

class MobileNavigation extends Component {
  render() {
    return (
      <>
        <nav className={styles.mobileNavigation}>
          <BurgerIcon
            className={styles.burgerIcon}
            onClick={() => {
              this.props.onShowMobileNav(true);
              console.log("this.props.mobileNav");
            }}
          />
        </nav>

        {this.props.mobileNav && (
          <>
            <MobileNavigationDropdown />
            <Backdrop onClose={() => this.props.onShowMobileNav(false)} />
          </>
        )}
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onShowMobileNav: (mobileNav) => dispatch(setShowMobileNav(mobileNav)),
});

const mapStateToProps = (state) => ({
  mobileNav: state.modalReducer.mobileNav,
});

export default connect(mapStateToProps, mapDispatchToProps)(MobileNavigation);
