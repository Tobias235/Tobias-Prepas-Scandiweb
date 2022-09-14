const initialState = {
  currency: "$",
  category: "all",
  productId: null,
  cart: [],
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
    default:
      return state;
  }
};

export default Reducer;
