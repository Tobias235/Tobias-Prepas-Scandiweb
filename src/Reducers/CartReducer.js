import { v4 as uuidv4 } from "uuid";

const initialState = {
  cartItems: [],
  totalAmount: 0,
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
            item?.selectedAttributes,
            selectedAttributes || defaultActiveAttributes
          )
      );

      const updatedCartItems = cartItems?.map((item) => {
        if (
          item?.id === id &&
          attributesMatch(
            item?.selectedAttributes,
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
        selectedAttributes: {
          ...defaultActiveAttributes,
          ...(selectedAttributes || {}),
        },
        quantity: 1,
        uniqueId: uuidv4(),
      };

      return { ...state, cartItems: [...cartItems, newCartItem] };
    }

    case "CHANGE_QUANTITY":
      const { uniqueId, currencySymbol, amount } = payload;

      const newCartItems = state.cartItems.map((item) => {
        if (item.uniqueId === uniqueId) {
          const newQuantity = item.quantity + amount;
          return { ...item, quantity: newQuantity };
        } else {
          return item;
        }
      });
      const newTotalAmount = calculateTotalAmount(newCartItems, currencySymbol);
      return { ...state, cartItems: newCartItems, totalAmount: newTotalAmount };

    case "CALCULATE_TOTAL_AMOUNT":
      const { totalCurrencySymbol } = payload;
      const { cartItems } = state;

      const total = calculateTotalAmount(cartItems, totalCurrencySymbol);
      return { ...state, totalAmount: total };

    case "DELETE_CART_ITEM":
      const { item } = payload;
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.uniqueId !== item
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

const calculateTotalAmount = (cartItems, currencySymbol) => {
  return cartItems.reduce((acc, item) => {
    const matchingPrice = item.prices.find(
      (price) => price.currency.symbol === currencySymbol
    );
    if (matchingPrice) {
      return acc + matchingPrice.amount * item.quantity;
    } else {
      return acc;
    }
  }, 0);
};
