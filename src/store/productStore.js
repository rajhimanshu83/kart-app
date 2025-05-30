import { create } from "zustand";
import { getProducts } from "../services/productService";

const useProductStore = create((set) => ({
  products: [],
  isProductsLoading: false,
  error: null,

  fetchProducts: async () => {
    set({ isProductsLoading: true, error: null });

    try {
      const response = await getProducts();
      if (response.ok) {
        set({ products: response.products || [], isProductsLoading: false});
      } else {
        throw new Error(response.message || "Failed to fetch products");
      }
    } catch (error) {
      console.error("Fetch products error:", error);
      set({ error: error.message, isProductsLoading: false });
    }
  },
}));

export default useProductStore;
