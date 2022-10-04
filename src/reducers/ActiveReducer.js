const initialState = {
  currency: "$",
  category: "all",
  productId: null,
  activeAttributes: [],
};

const ActiveReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CURRENCY_LIST":
      return { ...state, currency: action.payload };
    case "SET_CATEGORY":
      return { ...state, category: action.payload };
    case "SET_PRODUCT_ID":
      return { ...state, productId: action.payload };
    case "SET_ACTIVE_ATTRIBUTES":
      return { ...state, activeAttributes: action.payload };
    default:
      return state;
  }
};
export default ActiveReducer;
