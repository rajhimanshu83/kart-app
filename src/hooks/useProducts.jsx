import { useEffect } from "react";
import useProductStore from "../store/productStore";

export function useProducts() {
  const { products, fetchProducts, isLoading } = useProductStore();

  // Fetch products on mount only once
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return { products, isLoading };
}