const initialState = {
  showCurrencyModal: false,
  showCart: false,
  mobileNav: false,
};

const ModalReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_CURRENCY_MODAL":
      const { isShowCurrencyModal } = payload;
      return { ...state, showCurrencyModal: isShowCurrencyModal };
    case "SET_SHOW_MINI_CART":
      const { isShowCart } = payload;
      return { ...state, showCart: isShowCart };
    case "SET_SHOW_MOBILE_NAV":
      const { isMobileNav } = payload;
      return { ...state, mobileNav: isMobileNav };
    default:
      return state;
  }
};
export default ModalReducer;
