import { v4 as uuidv4 } from "uuid";

const initialState = {
  cartItems: [],
  totalValue: 0,
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
      const updatedCartItemsQuantityInc = state.cartItems.map((cartItem) => {
        if (cartItem.uniqueId === payload.productId) {
          let quantity = cartItem.quantity + 1;
          return { ...cartItem, quantity };
        }
        return cartItem;
      });

      return {
        ...state,
        cartItems: updatedCartItemsQuantityInc,
        totalValue: calculateTotal(
          updatedCartItemsQuantityInc,
          payload.currencySymbol
        ),
      };

    case "DECREMENT_QUANTITY":
      const updatedCartItemsQuantityDec = state.cartItems.map((cartItem) => {
        if (cartItem.uniqueId === payload.productId && cartItem.quantity > 1) {
          let quantity = cartItem.quantity - 1;
          return { ...cartItem, quantity };
        }
        return cartItem;
      });
      return {
        ...state,
        cartItems: updatedCartItemsQuantityDec,
        totalValue: calculateTotal(
          updatedCartItemsQuantityDec,
          payload.currencySymbol
        ),
      };

    case "DELETE_CART_ITEM":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.uniqueId !== payload
        ),
      };

    case "CALCULATE_TOTAL":
      const currencySymbol = payload;
      const { cartItems } = state;
      const total = calculateTotal(cartItems, currencySymbol);
      return { ...state, totalValue: total };

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

const calculateTotal = (cartItems, currencySymbol) => {
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
