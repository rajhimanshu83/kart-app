import { ProductCard } from "./ProductCard";
import { ProductGridSkeleton } from "./ProductGridSkeleton";

const ProductGridSection = ({
  products,
  onAddToCart,
  cartItems,
  updateQuantity,
  isLoading,
}) => {
  const skeletonCount = 6; // Match your grid columns

  return (
    <div className="flex-grow w-full">
      <p className="text-4xl font-semibold text-[#3F2D28] mb-8 text-left">
        Desserts
      </p>

      <div className="min-h-[600px]">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {isLoading
            ? Array(skeletonCount)
                .fill(0)
                .map((_, i) => <ProductGridSkeleton key={i} />)
            : products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={onAddToCart}
                  cartItems={cartItems}
                  updateQuantity={updateQuantity}
                />
              ))}
        </div>
      </div>
    </div>
  );
};


export default ProductGridSection;
