const initialState = {
  currency: "$",
  category: "All",
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CURRENCY_LIST":
      return { ...state, currency: action.payload };
    case "SET_CATEGORY":
      return { ...state, category: action.payload };
    default:
      return state;
  }
};

export default Reducer;
