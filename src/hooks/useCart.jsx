import useCartStore from "../store/cartStore";

export function useCart() {
  const {
    items: cartItems,
    addItem,
    removeItem,
    updateQuantity,
    getTotalPrice,
    getTotalItems,
    clearCart,
    couponCode,
    discountAppliedText,
    handleApplyCoupon,
    getDiscountedPrice,
    resetCoupon
  } = useCartStore();

  return {
    cartItems,
    addItem,
    removeItem,
    updateQuantity,
    getTotalPrice,
    getTotalItems,
    clearCart,
    couponCode,
    discountAppliedText,
    handleApplyCoupon,
    getDiscountedPrice,
    resetCoupon,
  };
}
