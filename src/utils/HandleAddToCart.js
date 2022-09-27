import { v4 as uuidv4 } from "uuid";

export const handleAddToCart = (product, activeAttributes, cart) => {
  let cartItem = [];
  let cartArray = [];
  let attributes = [];
  let isEqual;

  if (activeAttributes.length > 0) {
    attributes = [...activeAttributes];
  } else if (activeAttributes.length === 0 && product.attributes.length > 0) {
    product.attributes.map((attribute) => {
      return attributes.push({
        id: product.id,
        name: attribute.name,
        value: attribute.items[0].value,
      });
    });
  }

  isEqual = cart.find(
    (cart) =>
      cart.id === product.id &&
      JSON.stringify(cart.activeAttributes) === JSON.stringify(attributes)
  );

  if (isEqual) {
    return { equal: isEqual.uniqueId };
  } else {
    cartItem.push({
      ...product,
      activeAttributes: attributes,
      uniqueId: uuidv4(),
      quantity: 1,
    });

    cartArray.push(...cart, ...cartItem);
    return cartArray;
  }
};
