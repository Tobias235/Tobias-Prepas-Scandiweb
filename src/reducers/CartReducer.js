import { v4 as uuidv4 } from "uuid";

const initialState = {
  cartItems: [],
};

const CartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_PRODUCT_TO_CART": {
      const { product, selectedAttributes } = payload;
      const { cartItems } = state;
      const { id, attributes } = product;

      const defaultActiveAttributes = attributes.reduce((acc, attribute) => {
        const value = attribute?.items?.find((item) => !!item.value)?.value;
        return value ? { ...acc, [attribute.name]: value } : acc;
      }, {});

      const itemExists = cartItems?.some(
        (item) =>
          item?.id === id &&
          attributesMatch(
            item?.activeAttributes,
            selectedAttributes || defaultActiveAttributes
          )
      );

      const updatedCartItems = cartItems?.map((item) => {
        if (
          item?.id === id &&
          attributesMatch(
            item?.activeAttributes,
            selectedAttributes || defaultActiveAttributes
          )
        ) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });

      if (itemExists) {
        return { ...state, cartItems: updatedCartItems };
      }

      const newCartItem = {
        ...product,
        activeAttributes: {
          ...defaultActiveAttributes,
          ...(selectedAttributes || {}),
        },
        quantity: 1,
        uniqueId: uuidv4(),
      };

      return { ...state, cartItems: [...cartItems, newCartItem] };
    }
    case "INCREMENT_QUANTITY":
      return {
        ...state,
        cartItems: state.cartItems.map((cartItem) => {
          if (cartItem.uniqueId === payload) {
            let quantity = cartItem.quantity + 1;
            return { ...cartItem, quantity };
          }
          return cartItem;
        }),
      };
    case "DECREMENT_QUANTITY":
      return {
        ...state,
        cartItems: state.cartItems.map((cartItem) => {
          if (cartItem.uniqueId === payload && cartItem.quantity > 1) {
            let quantity = cartItem.quantity - 1;
            return { ...cartItem, quantity };
          }
          return cartItem;
        }),
      };
    case "CHANGE_QUANTITY":
      return {
        ...state,
        cartItems: state.cartItems.map((cartItem) => {
          if (cartItem.uniqueId === payload) {
            let quantity = cartItem.quantity + 1;
            return { ...cartItem, quantity };
          }
          return cartItem;
        }),
      };
    case "DELETE_PRODUCT":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.uniqueId !== payload
        ),
      };
    case "RESET_CART":
      return { ...initialState };
    default:
      return state;
  }
};
export default CartReducer;

const attributesMatch = (itemAttributes, targetAttributes) => {
  return JSON.stringify(itemAttributes) === JSON.stringify(targetAttributes);
};
