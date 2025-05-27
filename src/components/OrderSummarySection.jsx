const OrderSummarySection = ({ orderItems, startNewOrder, finalOrderPrice }) => {
  
  return (
    <div className="flex justify-center items-center m-0 p-0 font-inter">
      <div
        className="
        bg-white
        rounded-xl
        shadow-2xl
        p-4 sm:p-6 md:p-8 lg:p-10
        max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl
        w-full
        flex flex-col
        space-y-4 sm:space-y-6
      "
      >
        {/* Confirmation Header */}
        <div className="flex flex-col items-center text-center space-y-2 sm:space-y-4">
          <svg
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
            Order Confirmed
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600">
            We hope you enjoy your food!
          </p>
        </div>

        {/* Order Items Section */}
        <div className="rounded-xl bg-[#FBF7F4]">
          <div>
            {orderItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-3 sm:p-4 border-b border-gray-200 pr-6 sm:pr-10"
              >
                <div className="flex items-center space-x-3 sm:space-x-4">
                  {/* Item Image */}
                  <img
                    src={item.image.thumbnail}
                    alt={item.name}
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-md object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        'https://placehold.co/80x80/E0E0E0/333333?text=Item';
                    }}
                  />
                  <div className="flex flex-col">
                    <span className="font-medium text-[#716764] text-sm sm:text-base md:text-lg">
                      {item.name}
                    </span>
                    <p className="text-xs sm:text-sm">
                      <span className="text-[#BB7D6B]">{item.quantity}x</span>
                      <span className="text-[#C9BFBC]">&nbsp;@ ${item.price.toFixed(2)}</span>
                    </p>
                  </div>
                </div>
                <span className="font-semibold text-[#635957] text-sm sm:text-base md:text-lg">
                  ${(item.quantity * item.price).toFixed(2)}
                </span>
              </div>
            ))}
          </div>

          {/* Order Total Section */}
          <div className="flex justify-between items-center mt-4 px-4 sm:px-5 mb-6">
            <p className="text-sm sm:text-base font-semibold text-[#928D8B]">
              Order Total
            </p>
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-[#483A37]">
              ${finalOrderPrice.toFixed(2)}
            </p>
          </div>
        </div>

        {/* Start New Order Button */}
        <button
          className="
            mt-4 sm:mt-6
            bg-[#C73B0E]
            text-[#EEBBA3]
            cursor-pointer
            font-semibold
            py-2 sm:py-3 px-6 sm:px-8
            rounded-full
            shadow-lg
            transition-all duration-300 ease-in-out
            focus:outline-none focus:ring-2 focus:ring-opacity-50
            w-full
            text-base sm:text-lg md:text-xl
            hover:scale-105
          "
          onClick={() => startNewOrder()}
        >
          Start New Order
        </button>
      </div>
    </div>
  );
};

export default OrderSummarySection;
