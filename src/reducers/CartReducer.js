const initialState = {
  cart: [],
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ADD_CART":
      return { ...state, cart: action.payload };
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
    case "SET_DELETE_PRODUCT":
      return {
        ...state,
        cart: state.cart.filter((cart) => cart.uniqueId !== action.payload),
      };
    case "SET_CHECK_OUT":
      return { ...initialState };
    default:
      return state;
  }
};
export default CartReducer;
