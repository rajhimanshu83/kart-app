export const QuantityCounter = ({ productId, quantity, updateQuantity }) => {
  return (
    <div className="absolute bg-[#C63B0F] top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-800 h-9 sm:h-10 px-3 sm:px-4 rounded-full shadow-lg hover:scale-105 hover:shadow-xl active:scale-95 focus:outline-none flex items-center justify-between gap-4 text-xs sm:text-sm font-bold transition-all duration-200 w-9/12 sm:w-4/6">
      <button
        onClick={() => updateQuantity(productId, -1)}
        className="text-white cursor-pointer ring-1 ring-[#FFFFFF] rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-sm font-bold"
      >
        -
      </button>

      <div className="text-[#EAB096] font-semibold">{quantity}</div>

      <button
        onClick={() => updateQuantity(productId, 1)}
        className="text-white cursor-pointer ring-1 ring-[#FFFFFF] rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-sm font-bold"
      >
        +
      </button>
    </div>
  );
};
