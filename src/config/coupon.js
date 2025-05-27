import {
  getTotalItems,
  getTotalPrice,
  getMinItemPrice,
} from "../utils/cartUtils";

export const coupons = {
  HAPPYHOURS: {
    label: "HAPPYHOURS (18% Off)",
    apply: (cart) => getTotalPrice(cart.items) * 0.18,
    isValid: (cart) => getTotalItems(cart.items) > 0,
  },
  BUYGETONE: {
    label: "BUYGETONE (Lowest priced item free)",
    apply: (cart) => getMinItemPrice(cart.items),
    isValid: (cart) => getTotalItems(cart.items) >= 2,
  },
};
