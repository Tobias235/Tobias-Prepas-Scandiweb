export const setAddCart = (cart) => {
  return {
    type: "SET_ADD_CART",
    payload: cart,
  };
};

export const setIncementQuantity = (increment) => {
  return {
    type: "SET_INCREMENT_QUANTITY",
    payload: increment,
  };
};

export const setDecrementQuantity = (decrement) => {
  return {
    type: "SET_DECREMENT_QUANTITY",
    payload: decrement,
  };
};

export const setDeleteProduct = (product) => {
  return {
    type: "SET_DELETE_PRODUCT",
    payload: product,
  };
};

export const setChangeQuantity = (quantity) => {
  return {
    type: "SET_CHANGE_QUANTITY",
    payload: quantity,
  };
};

export const setCheckOut = () => {
  return {
    type: "SET_CHECK_OUT",
  };
};
