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
