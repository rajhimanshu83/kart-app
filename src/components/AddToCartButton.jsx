import AddToCartIcon from "../assets/icons/add-to-cart-icon.png";

export const AddToCartButton = ({ onClick, productName }) => (
  <button
    onClick={onClick}
    className="absolute cursor-pointer top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-[#7E7775] h-9 sm:h-10 px-3 sm:px-4 rounded-full shadow-lg hover:scale-105 hover:shadow-xl active:scale-95 ring-1 ring-[#B6ABA8] flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-bold transition-all w-9/12 sm:w-4/6"
  >
    <img
      src={AddToCartIcon}
      alt={`Add ${productName} to cart`}
      className="w-4 h-4 sm:w-4 sm:h-4"
    />
    <span>Add to Cart</span>
  </button>
);
