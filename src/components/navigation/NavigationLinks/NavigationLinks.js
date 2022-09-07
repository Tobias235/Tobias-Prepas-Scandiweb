import { gql } from "@apollo/client";
import { Query } from "@apollo/client/react/components";
import { Component } from "react";
import styles from "./NavigationLinks.module.scss";

const GET_CATEGORIES = gql`
  query {
    categories {
      name
    }
  }
`;

const links = (
  <Query query={GET_CATEGORIES}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading…</p>;
      if (error) return <p>Error :(</p>;
      return data.categories.map(({ name }) => <p key={name}>{`${name} `}</p>);
    }}
  </Query>
);

class NavigationLinks extends Component {
  render() {
    return <div className={styles.navigationLinks}>{links}</div>;
  }
}

export default NavigationLinks;
