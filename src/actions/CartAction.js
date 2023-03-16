export const setAddProductCart = (product, selectedAttributes) => {
  return {
    type: "ADD_PRODUCT_TO_CART",
    payload: { product, selectedAttributes },
  };
};

export const setIncementQuantity = (increment) => {
  return {
    type: "INCREMENT_QUANTITY",
    payload: increment,
  };
};

export const setDecrementQuantity = (decrement) => {
  return {
    type: "DECREMENT_QUANTITY",
    payload: decrement,
  };
};

export const setDeleteProduct = (product) => {
  return {
    type: "DELETE_PRODUCT",
    payload: product,
  };
};

export const setChangeQuantity = (quantity) => {
  return {
    type: "CHANGE_QUANTITY",
    payload: quantity,
  };
};

export const setCheckOut = () => {
  return {
    type: "RES",
  };
};
