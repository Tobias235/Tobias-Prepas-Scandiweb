export const setChangeCurrency = (currentCurrency) => {
  return {
    type: "SET_CURRENCY_LIST",
    payload: currentCurrency,
  };
};
