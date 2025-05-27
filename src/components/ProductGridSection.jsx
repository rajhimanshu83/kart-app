import { useScreenSize } from "../hooks/useScreenSize";
import { ProductCard } from "./ProductCard";

export const ProductGridSection = ({
  products,
  onAddToCart,
  cartItems,
  updateQuantity,
}) => {

  const screenSize = useScreenSize();

  return (
    <div className="flex-grow w-full">
      <p className="text-4xl font-bold text-[#1f2937] mb-8 text-left">
        Desserts
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
    </div>
  );
};