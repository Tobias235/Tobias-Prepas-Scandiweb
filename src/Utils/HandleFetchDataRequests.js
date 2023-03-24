import { gql } from "@apollo/client";

export const handleGetProductsByCategory = (category) => {
  const GET_PRODUCTS_BY_CATEGORY = gql`
    query GetProductsByCategory {
      category(input: { title: "${category}" }) {
        products {
          id
          name
          brand
          gallery
          inStock
          category
          description
          attributes {
            type
            name
            items {
              value
            }
          }
          prices {
            currency {
              symbol
              label
            }
            amount
          }
        }
      }
    }
  `;
  return GET_PRODUCTS_BY_CATEGORY;
};

export const handleGetCategories = () => {
  const GET_CATEGORIES = gql`
    query getCategories {
      categories {
        name
      }
    }
  `;
  return GET_CATEGORIES;
};

export const handleGetProductById = (productId) => {
  const GET_PRODUCT_BY_ID = gql`
    query getProductById {
        product(id: "${productId}"){
          id
          name
          brand
          gallery
          inStock
          category
          description
          attributes {
            type
            name
            items {
              value
            }
          }
          prices {
            currency {
              symbol
              label
            }
            amount
          }
        }
      }
  `;
  return GET_PRODUCT_BY_ID;
};

export const handleGetCurrencies = () => {
  const GET_CURRENCIES = gql`
    query GetCurrencies {
      currencies {
        label
        symbol
      }
    }
  `;
  return GET_CURRENCIES;
};
