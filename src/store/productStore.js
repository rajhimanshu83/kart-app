import { create } from "zustand";
import { getProducts } from "../services/productService";

const useProductStore = create((set) => ({
  products: [],
  loading: false,
  error: null,

  fetchProducts: async () => {
    set({ loading: true, error: null });

    try {
      const response = await getProducts();
      if (response.ok) {
        set({ products: response.products || [], loading: false });
      } else {
        throw new Error(response.message || "Failed to fetch products");
      }
    } catch (error) {
      console.error("Fetch products error:", error);
      set({ error: error.message, loading: false });
    }
  },
}));

export default useProductStore;
