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

export const setActiveAttributes = (attribute) => {
  return {
    type: "SET_ACTIVE_ATTRIBUTES",
    payload: attribute,
  };
};

export const setIncementQuantity = (increment) => {
  return {
    type: "SET_INCREMENT_QUANTITY",
    payload: increment,
  };
};

export const setDecrementQuantity = (decrement) => {
  return {
    type: "SET_DECREMENT_QUANTITY",
    payload: decrement,
  };
};

export const setDeleteProduct = (product) => {
  return {
    type: "SET_DELETE_PRODUCT",
    payload: product,
  };
};
