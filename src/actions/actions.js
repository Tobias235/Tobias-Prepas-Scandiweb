export const setChangeCurrency = (currentCurrency) => {
  return {
    type: "SET_CURRENCY_LIST",
    payload: currentCurrency,
  };
};

export const setChangeCategory = (currentCategory) => {
  return {
    type: "SET_CATEGORY",
    payload: currentCategory,
  };
};

export const setProductId = (productId) => {
  return {
    type: "SET_PRODUCT_ID",
    payload: productId,
  };
};

export const setAddCart = (cart) => {
  return {
    type: "SET_ADD_CART",
    payload: cart,
  };
};
