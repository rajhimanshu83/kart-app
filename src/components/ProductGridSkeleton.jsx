import { ProductCardSkeleton } from "./ProductCardSkeleton";

export const ProductGridSkeleton = ({ count = 9 }) => (
    Array.from({ length: count }).map((_, i) => (
      <ProductCardSkeleton key={i} />
    ))
);