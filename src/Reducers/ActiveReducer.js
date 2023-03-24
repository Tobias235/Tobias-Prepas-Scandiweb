const initialState = {
  currency: "$",
  category: "all",
  productId: null,
  activeAttributes: null,
};

const ActiveReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_CURRENCY_LIST":
      return { ...state, currency: payload };
    case "SET_CATEGORY":
      return { ...state, category: payload };
    case "SET_PRODUCT_ID":
      return { ...state, productId: payload };
    case "SET_ACTIVE_ATTRIBUTES":
      return { ...state, activeAttributes: payload };
    default:
      return state;
  }
};
export default ActiveReducer;
