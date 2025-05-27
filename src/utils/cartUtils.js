export const findItemInCart = (items, productId) =>
  items.find((item) => item.id === productId);

export const updateItemQuantity = (items, productId, quantityChange) =>
  items.map((item) =>
    item.id === productId
      ? { ...item, quantity: item.quantity + quantityChange }
      : item
  );

export const removeItemFromCart = (items, productId) =>
  items.filter((item) => item.id !== productId);

export const getTotalItems = (items) =>
  items.reduce((total, item) => total + item.quantity, 0);

export const getTotalPrice = (items) =>
  items.reduce((total, item) => total + item.quantity * item.price, 0);

export const getMinItemPrice = (items) =>
  items.length > 0 ? Math.min(...items.map((item) => item.price)) : 0;
