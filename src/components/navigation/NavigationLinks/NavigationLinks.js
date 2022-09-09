import { gql } from "@apollo/client";
import { Query } from "@apollo/client/react/components";
import { connect } from "react-redux";
import { Component } from "react";
import styles from "./NavigationLinks.module.scss";
import { setChangeCategory } from "../../../actions/actions";

const GET_CATEGORIES = gql`
  query {
    categories {
      name
    }
  }
`;

class NavigationLinks extends Component {
  handleCategory = (e) => {
    console.log(e.target.id);
    this.props.onChangeCategory(e.target.id);
  };
  render() {
    return (
      <div className={styles.navigationLinks}>
        <Query query={GET_CATEGORIES}>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading…</p>;
            if (error) return <p>Error :(</p>;
            return data.categories.map(({ name }) => (
              <p
                key={name}
                id={name}
                onClick={this.handleCategory}
              >{`${name} `}</p>
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

export default connect(null, mapDispatchToProps)(NavigationLinks);
