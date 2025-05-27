import { APIClient } from "../utils/httpClient";


export const getProducts = async () => {
  try {
    const response = await new APIClient({ path: `/product` }).get();

    // Destructure ok and the rest of product fields
    const { ok, ...productObj } = response;

    // Defensive: ensure productObj is an object with product values
    const productArray = Array.isArray(productObj)
      ? productObj
      : Object.values(productObj || {});

    return { ok, products: productArray };
  } catch (error) {
    console.error("Error fetching products:", error);
    return { ok: false, products: [] };
  }
};
