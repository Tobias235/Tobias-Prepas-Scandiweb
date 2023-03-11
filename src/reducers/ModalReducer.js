const initialState = {
  showCurrencyModal: false,
  showCart: false,
  mobileNav: false,
};

const ModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CURRENCY_MODAL":
      return { ...state, showCurrencyModal: action.payload };
    case "SET_SHOW_MINI_CART":
      return { ...state, showCart: action.payload };
    case "SET_SHOW_MOBILE_NAV":
      return { ...state, mobileNav: action.payload };
    default:
      return state;
  }
};
export default ModalReducer;
