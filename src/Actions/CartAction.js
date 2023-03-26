export const addProductCart = (product, selectedAttributes) => {
  return {
    type: "ADD_PRODUCT_TO_CART",
    payload: { product, selectedAttributes },
  };
};

export const changeQuantity = (uniqueId, currencySymbol, amount) => {
  return {
    type: "CHANGE_QUANTITY",
    payload: { uniqueId, currencySymbol, amount },
  };
};

export const calculateTotalAmount = (totalCurrencySymbol) => {
  return {
    type: "CALCULATE_TOTAL_AMOUNT",
    payload: { totalCurrencySymbol },
  };
};

export const deleteCartItem = (item) => {
  return {
    type: "DELETE_CART_ITEM",
    payload: { item },
  };
};

export const resetCart = () => {
  return {
    type: "RESET_CART",
  };
};
