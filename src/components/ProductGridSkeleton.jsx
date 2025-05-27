import { ProductCardSkeleton } from "./ProductCardSkeleton";

export const ProductGridSkeleton = ({ count = 9 }) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
    {Array.from({ length: count }).map((_, i) => (
      <ProductCardSkeleton key={i} />
    ))}
  </div>
);