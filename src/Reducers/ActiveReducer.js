const initialState = {
  currencySymbol: "$",
  category: "all",
  productId: null,
  selectedAttributes: null,
};

const ActiveReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_CURRENT_CURRENCY":
      const { currentSymbol } = payload;
      return { ...state, currencySymbol: currentSymbol };
    case "SET_CATEGORY":
      const { currentCategory } = payload;
      return { ...state, category: currentCategory };
    case "SET_PRODUCT_ID":
      const { productId } = payload;
      return { ...state, productId: productId };
    case "SET_SELECTED_ATTRIBUTES":
      const { selectedAttributes } = payload;
      return { ...state, selectedAttributes: selectedAttributes };
    default:
      return state;
  }
};
export default ActiveReducer;
