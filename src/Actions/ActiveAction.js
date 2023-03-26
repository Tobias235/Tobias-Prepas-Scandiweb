export const setChangeCurrency = (currentSymbol) => {
  return {
    type: "SET_CURRENT_CURRENCY",
    payload: { currentSymbol },
  };
};

export const setChangeCategory = (currentCategory) => {
  return {
    type: "SET_CATEGORY",
    payload: { currentCategory },
  };
};

export const setProductId = (productId) => {
  return {
    type: "SET_PRODUCT_ID",
    payload: { productId },
  };
};

export const setSelectedAttributes = (selectedAttributes) => {
  return {
    type: "SET_SELECTED_ATTRIBUTES",
    payload: { selectedAttributes },
  };
};
