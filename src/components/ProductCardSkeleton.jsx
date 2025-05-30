export const ProductCardSkeleton = () => {
  return (
    <div className="relative w-full max-w-sm mx-auto hover:shadow-xl overflow-hidden flex flex-col transform transition duration-300 hover:scale-105 rounded-xl animate-pulse">
      {/* Image Placeholder */}
      <div className="relative w-full pb-[75%] sm:pb-[100%] overflow-hidden bg-gray-200 rounded-xl"></div>

      {/* Details Placeholder */}
      <div className="relative flex flex-col p-4 pt-9 sm:pt-9 min-h-[120px] justify-end text-left">
        {/* Category Placeholder */}
        <div className="h-4 w-16 bg-gray-300 rounded mb-2"></div>

        {/* Product Name Placeholder */}
        <div className="h-5 w-32 bg-gray-300 rounded mb-2"></div>

        {/* Price Placeholder */}
        <div className="h-5 w-20 bg-gray-300 rounded mt-auto"></div>
      </div>
    </div>
  );
};
