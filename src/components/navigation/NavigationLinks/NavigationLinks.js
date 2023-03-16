import { Query } from "@apollo/client/react/components";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { Component } from "react";
import styles from "./NavigationLinks.module.scss";
import { setChangeCategory } from "../../../actions/ActiveAction";
import { handleGetCategories } from "../../../Utils/HandleFetchDataRequests";
import { setShowMobileNav } from "../../../actions/ModalAction";

class NavigationLinks extends Component {
  handleCategory = (e) => {
    this.props.onChangeCategory(e.target.id);

    if (this.props.mobileNav) {
      this.props.onShowMobileNav(false);
    }
  };

  render() {
    const { category, className } = this.props;
    return (
      <div className={` ${styles.navigationLinks} ${className}`}>
        <Query query={handleGetCategories()}>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading…</p>;
            if (error) return <p>Error :(</p>;
            return data.categories.map(({ name }) => (
              <NavLink
                key={name}
                id={name}
                onClick={this.handleCategory}
                className={`${styles.navLinks} ${
                  category === name ? styles.active : null
                }`}
                to={{
                  pathname: `/${name}`,
                }}
              >{`${name} `}</NavLink>
            ));
          }}
        </Query>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onChangeCategory: (category) => dispatch(setChangeCategory(category)),
  onShowMobileNav: (mobileNav) => dispatch(setShowMobileNav(mobileNav)),
});

const mapStateToProps = (state) => ({
  category: state.activeReducer.category,
  mobileNav: state.modalReducer.mobileNav,
});

export default connect(mapStateToProps, mapDispatchToProps)(NavigationLinks);
