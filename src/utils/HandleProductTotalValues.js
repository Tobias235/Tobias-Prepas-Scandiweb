export const HandleProductTotalValues = (cart, currency) => {
  let total = 0;
  let quantity = 0;
  let totalQuantity = [];
  let totalArray = [];
  let returnArray = [];
  let initial;

  cart.map((cart) => {
    totalQuantity.push(cart.quantity);
    initial = 0;

    quantity = totalQuantity.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initial
    );

    cart.prices.map((price) => {
      if (price.currency.symbol === currency) {
        totalArray.push(price.amount * cart.quantity);
        initial = 0;
        total = totalArray.reduce(
          (previousValue, currentValue) => previousValue + currentValue,
          initial
        );
      }
      return (returnArray = [
        { total: total, tax: total * 0.21, quantity: quantity },
      ]);
    });
    return cart;
  });
  return returnArray;
};
