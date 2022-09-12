const initialState = {
  currency: "$",
  category: "all",
  productId: null,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CURRENCY_LIST":
      return { ...state, currency: action.payload };
    case "SET_CATEGORY":
      return { ...state, category: action.payload };
    case "SET_PRODUCT_ID":
      return { ...state, productId: action.payload };
    default:
      return state;
  }
};

export default Reducer;
