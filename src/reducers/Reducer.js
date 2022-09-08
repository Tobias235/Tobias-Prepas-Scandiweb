const InitialState = {
  currency: "$",
};

const Reducer = (state = InitialState, action) => {
  switch (action.type) {
    case "SET_CURRENCY_LIST":
      return { ...state, currency: action.payload };
    default:
      return state;
  }
};

export default Reducer;
