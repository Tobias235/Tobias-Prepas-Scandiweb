export const setShowMiniCart = (isShowCart) => {
  return {
    type: "SET_SHOW_MINI_CART",
    payload: { isShowCart },
  };
};

export const setShowCurrencyModal = (isShowCurrencyModal) => {
  return {
    type: "SET_CURRENCY_MODAL",
    payload: { isShowCurrencyModal },
  };
};

export const setShowMobileNav = (isMobileNav) => {
  return {
    type: "SET_SHOW_MOBILE_NAV",
    payload: { isMobileNav },
  };
};
