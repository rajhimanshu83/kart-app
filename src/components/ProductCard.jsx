import { AddToCartButton } from "./AddToCartButton";
import { QuantityCounter } from "./QuantityCounter";

export const ProductCard = ({ product, onAddToCart, updateQuantity, cartItems, screenSize }) => {
  const existingCartItem = cartItems.find((item) => item.id === product.id);

  return (
    <div className="relative w-full max-w-sm mx-auto hover:shadow-xl overflow-hidden flex flex-col transform transition duration-300 hover:scale-105 rounded-xl">
      <div className="relative w-full pb-[75%] sm:pb-[100%] overflow-hidden">
        <img
          src={product.image[screenSize]}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover rounded-xl ${
            existingCartItem ? "border-2 border-[#C63B0F]" : ""
          }`}
        />
      </div>

      {/* Details */}
      <div className="relative flex flex-col p-4 pt-12 sm:pt-16 min-h-[120px] justify-end text-left">
        {existingCartItem ? (
          <QuantityCounter
            productId={product.id}
            quantity={existingCartItem.quantity}
            updateQuantity={updateQuantity}
          />
        ) : (
          <AddToCartButton
            onClick={() => onAddToCart(product)}
            productName={product.name}
          />
        )}

        <p className="text-xs sm:text-sm text-[#B5A8A5] mb-1">{product.category}</p>
        <p className="text-sm sm:text-base md:text-lg font-semibold text-[#665A57] mb-2">
          {product.name}
        </p>
        <p className="text-base sm:text-lg md:text-xl font-bold text-[#BD7765] mt-auto">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
};
