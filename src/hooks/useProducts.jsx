import { useEffect } from "react";
import useProductStore from "../store/productStore";

export function useProducts() {
  const { products, fetchProducts, isProductsLoading, error } = useProductStore();

  // Fetch products on mount only once
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return { products, isProductsLoading, error };
}