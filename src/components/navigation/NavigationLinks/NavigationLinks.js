import { Query } from "@apollo/client/react/components";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { Component } from "react";
import styles from "./NavigationLinks.module.scss";
import { setChangeCategory } from "../../../actions/ActiveAction";
import { handleGetCategories } from "../../../utils/HandleFetchDataRequests";

class NavigationLinks extends Component {
  handleCategory = (e) => {
    this.props.onChangeCategory(e.target.id);
  };
  render() {
    const { category } = this.props;
    return (
      <div className={styles.navigationLinks}>
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
});

const mapStateToProps = (state) => ({
  category: state.activeReducer.category,
});

export default connect(mapStateToProps, mapDispatchToProps)(NavigationLinks);
