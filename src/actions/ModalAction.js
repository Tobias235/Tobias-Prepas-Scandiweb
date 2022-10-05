export const setShowMiniCart = (showCart) => {
  return {
    type: "SET_SHOW_MINI_CART",
    payload: showCart,
  };
};

export const setShowCurrencyModal = (showCurrencyModal) => {
  return {
    type: "SET_CURRENCY_MODAL",
    payload: showCurrencyModal,
  };
};
