const initialState = {
  showCurrencyModal: false,
  showCart: false,
};

const ModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CURRENCY_MODAL":
      return { ...state, showCurrencyModal: action.payload };
    case "SET_SHOW_MINI_CART":
      return { ...state, showCart: action.payload };
    default:
      return state;
  }
};
export default ModalReducer;
