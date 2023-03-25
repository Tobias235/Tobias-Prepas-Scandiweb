export const addProductCart = (product, selectedAttributes) => {
  return {
    type: "ADD_PRODUCT_TO_CART",
    payload: { product, selectedAttributes },
  };
};

export const setIncementQuantity = (productId, currencySymbol) => {
  return {
    type: "INCREMENT_QUANTITY",
    payload: { productId, currencySymbol },
  };
};

export const setDecrementQuantity = (productId, currencySymbol) => {
  return {
    type: "DECREMENT_QUANTITY",
    payload: { productId, currencySymbol },
  };
};

export const calculateTotal = (currencySymbol) => {
  return {
    type: "CALCULATE_TOTAL",
    payload: currencySymbol,
  };
};

export const deleteCartItem = (item) => {
  return {
    type: "DELETE_CART_ITEM",
    payload: item,
  };
};

export const setCheckOut = () => {
  return {
    type: "RESET_CART",
  };
};
