import { AddToCartButton } from "./buttons/AddToCartButton";
import { QuantityCounterButton } from "./buttons/QuantityCounterButton";

export const ProductCard = ({
  product,
  onAddToCart,
  updateQuantity,
  cartItems,
}) => {
  const existingCartItem = cartItems.find((item) => item.id === product.id);

  return (
    <div className="relative w-full max-w-sm mx-auto hover:shadow-xl overflow-hidden flex flex-col transform transition duration-300 hover:scale-105 rounded-xl">
      <div className="relative w-full pb-[75%] sm:pb-[100%] overflow-hidden">
        <picture className="absolute top-0 left-0 w-full h-full">
          <source media="(min-width: 1024px)" srcSet={product.image.desktop} />
          <source media="(min-width: 640px)" srcSet={product.image.tablet} />
          <img
            src={product.image.mobile}
            alt={product.name}
            className={`w-full h-full object-fit rounded-xl ${
              existingCartItem ? "border-2 border-[#C63B0F]" : ""
            }`}
          />
        </picture>
      </div>

      {/* Details */}
      <div className="relative flex flex-col p-4 pt-9 sm:pt-9 min-h-[120px] justify-end text-left">
        {existingCartItem ? (
          <QuantityCounterButton
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

        <p className="text-xs sm:text-sm text-[#B5A8A5] mb-1">
          {product.category}
        </p>
        <p className="text-sm sm:text-base md:text-base font-semibold text-[#665A57] mb-1">
          {product.name}
        </p>
        <p className="text-base sm:text-base md:text-base font-semibold text-[#BD7765] mt-auto">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
};
