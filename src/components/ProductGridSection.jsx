import { useScreenSize } from "../hooks/useScreenSize";
import { ProductCard } from "./ProductCard";
import { ProductGridSkeleton } from "./ProductGridSkeleton";

const ProductGridSection = ({
  products,
  onAddToCart,
  cartItems,
  updateQuantity,
  isLoading,
}) => {
  const screenSize = useScreenSize();

  return (
    <div className="flex-grow w-full">
      <p className="text-4xl font-semibold text-[#3F2D28] mb-8 text-left">
        Desserts
      </p>

      <div className="min-h-[400px]">
        {isLoading ? (
          <ProductGridSkeleton />
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
                cartItems={cartItems}
                updateQuantity={updateQuantity}
                screenSize={screenSize}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductGridSection;
