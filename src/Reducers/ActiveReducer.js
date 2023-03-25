const initialState = {
  currencySymbol: "$",
  category: "all",
  productId: null,
  selectedAttributes: null,
};

const ActiveReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_CURRENCY_LIST":
      return { ...state, currencySymbol: payload };
    case "SET_CATEGORY":
      return { ...state, category: payload };
    case "SET_PRODUCT_ID":
      return { ...state, productId: payload };
    case "SET_ACTIVE_ATTRIBUTES":
      return { ...state, selectedAttributes: payload };
    default:
      return state;
  }
};
export default ActiveReducer;
