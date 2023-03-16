const initialState = {
  showCurrencyModal: false,
  showCart: false,
  mobileNav: false,
};

const ModalReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_CURRENCY_MODAL":
      return { ...state, showCurrencyModal: payload };
    case "SET_SHOW_MINI_CART":
      return { ...state, showCart: payload };
    case "SET_SHOW_MOBILE_NAV":
      return { ...state, mobileNav: payload };
    default:
      return state;
  }
};
export default ModalReducer;
