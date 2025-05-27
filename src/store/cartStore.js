import { create } from "zustand";
import { coupons } from "../config/coupon";
import {
  findItemInCart,
  updateItemQuantity,
  removeItemFromCart,
  getTotalItems,
  getTotalPrice,
} from "../utils/cartUtils";

const useCartStore = create((set, get) => ({
  items: [],
  couponCode: null,
  discountAppliedText: "",
  discountAmount: 0,

  handleApplyCoupon: (codeInput) => {
    const code = codeInput.trim().toUpperCase();
    const coupon = coupons[code];

    if (coupon) {
      const cart = get();
      if (coupon.isValid(cart)) {
        const discount = coupon.apply(cart);
        set({
          discountAppliedText: coupon.label,
          couponCode: code,
          discountAmount: discount,
        });
        return true;
      } else {
        get().resetCoupon();
        return false;
      }
    } else {
      get().resetCoupon();
      return false;
    }
  },

  resetCoupon: () => {
    set({
      couponCode: null,
      discountAppliedText: "",
      discountAmount: 0,
    });
  },

  validateCoupon: () => {
    const code = get().couponCode;
    if (!code || get().items.length === 0) {
      get().resetCoupon();
    } else {
      get().handleApplyCoupon(code);
    }
  },

  addItem: (product, quantity = 1) => {
    const items = get().items;
    const existingItem = findItemInCart(items, product.id);

    if (existingItem) {
      set({ items: updateItemQuantity(items, product.id, quantity) });
    } else {
      set({ items: [...items, { ...product, quantity }] });
    }

    get().validateCoupon();
  },

  removeItem: (productId) => {
    set({ items: removeItemFromCart(get().items, productId) });
    get().validateCoupon();
  },

  updateQuantity: (productId, quantity) => {
    const items = get().items;
    const item = findItemInCart(items, productId);

    if (!item) return;

    if (quantity === -1 && item.quantity === 1) {
      get().removeItem(productId);
    } else {
      set({ items: updateItemQuantity(items, productId, quantity) });
    }

    get().validateCoupon();
  },

  clearCart: () =>
    set({
      items: [],
      couponCode: null,
      discountAppliedText: "",
      discountAmount: 0,
    }),

  getTotalItems: () => getTotalItems(get().items),

  getTotalPrice: () => getTotalPrice(get().items),

  getDiscountedPrice: () => get().getTotalPrice() - get().discountAmount,
}));

export default useCartStore;
