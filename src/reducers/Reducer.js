const initialState = {
  currency: "$",
  category: "all",
  productId: null,
  cart: [],
  activeAttributes: [],
  showCart: false,
  showCurrencyModal: false,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CURRENCY_LIST":
      return { ...state, currency: action.payload };
    case "SET_CATEGORY":
      return { ...state, category: action.payload };
    case "SET_PRODUCT_ID":
      return { ...state, productId: action.payload };
    case "SET_ADD_CART":
      return { ...state, cart: action.payload };
    case "SET_ACTIVE_ATTRIBUTES":
      return { ...state, activeAttributes: action.payload };
    case "SET_INCREMENT_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((cart) => {
          if (cart.uniqueId === action.payload) {
            let quantity = cart.quantity + 1;
            return { ...cart, quantity };
          }
          return cart;
        }),
      };
    case "SET_DECREMENT_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((cart) => {
          if (cart.uniqueId === action.payload && cart.quantity > 1) {
            let quantity = cart.quantity - 1;
            return { ...cart, quantity };
          }
          return cart;
        }),
      };
    case "SET_DELETE_PRODUCT":
      return {
        ...state,
        cart: state.cart.filter((cart) => cart.uniqueId !== action.payload),
      };
    case "SET_CHANGE_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((cart) => {
          if (cart.uniqueId === action.payload) {
            let quantity = cart.quantity + 1;
            return { ...cart, quantity };
          }
          return cart;
        }),
      };
    case "SET_SHOW_MINI_CART":
      return { ...state, showCart: action.payload };
    case "SET_CURRENCY_MODAL":
      return { ...state, showCurrencyModal: action.payload };
    case "SET_CHECK_OUT":
      return { ...initialState };
    default:
      return state;
  }
};
export default Reducer;
