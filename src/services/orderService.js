import { APIClient } from "../utils/httpClient";

export const createOrder = async (items, couponCode) => {
  try {
    const response = await new APIClient({
      path: `/order`,
      payload: {
        couponCode,
        items,
      },
    }).post();

    if (response && typeof response.ok === "boolean") {
      return {
        ok: response.ok,
        products: response.products ?? [],
      };
    }

    return { ok: false, products: [] };
  } catch (error) {
    console.error("Error creating order:", error);
    return { ok: false, products: [] };
  }
};
