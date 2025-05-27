import { useState } from "react";
import EmptyCartIcon from "../assets/icons/empty-cart-icon.png";
import CrossIcon from "../assets/icons/cross-icon.png";
import TreeIcon from "../assets/icons/tree-icon.png";

export const CartSummarySection = ({
  cartItems = [],
  removeItem,
  getTotalItems,
  onCreateOrder,
  couponCode,
  discountAppliedText,
  handleApplyCoupon,
  getDiscountedPrice,
  resetCoupon,
}) => {
  const [couponCodeInput, setCouponCodeInput] = useState("");
  const [couponErrorMsg, setCouponErrorMsg] = useState("");

  const cartItemCount = getTotalItems();

  const handleRemoveCoupon = () => {
    resetCoupon();
    setCouponCodeInput("");
    setCouponErrorMsg("");
  };

  const handleCouponInputChange = (e) => {
    setCouponCodeInput(e.target.value.toUpperCase());
    setCouponErrorMsg(""); // Clear error when typing
  };

  const onCouponApplyClicked = () => {
    const isApplied = handleApplyCoupon(couponCodeInput.trim());
    if (isApplied) {
      setCouponCodeInput("");
      setCouponErrorMsg("");
    } else {
      setCouponErrorMsg("Invalid coupon code");
    }
  };

  const renderEmptyCart = () => (
    <div className="flex flex-col items-center justify-center w-full h-40 text-[#988A87]">
      <img src={EmptyCartIcon} alt="Empty cart" className="w-28 h-28 mb-4" />
      <p className="text-base font-medium">Your added items will appear here</p>
    </div>
  );

  return (
    <div className="w-full lg:w-96 flex flex-shrink-0">
      <div className="flex flex-col p-6 max-w-md w-full bg-white">
        <h2 className="text-2xl font-semibold text-[#BD7765] mb-6">
          Your Cart ({cartItemCount})
        </h2>

        {cartItemCount === 0 ? (
          renderEmptyCart()
        ) : (
          <>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="relative flex flex-col gap-1 p-2 border-b border-gray-200"
                >
                  <span className="font-semibold text-[#716A67]">
                    {item.name}
                  </span>
                  <div className="flex items-center text-sm">
                    <span className="text-[#C08778] font-bold mr-2">
                      {item.quantity}x
                    </span>
                    <span className="text-[#B2A8A6] font-bold">
                      @${item.price.toFixed(2)} &nbsp; $
                      {(item.quantity * item.price).toFixed(2)}
                    </span>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="absolute hover:scale-105 cursor-pointer right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-red-500 p-1"
                    aria-label="Remove item"
                  >
                    <img src={CrossIcon} alt="Remove" className="h-5 w-5" />
                  </button>
                </div>
              ))}

              <div className="flex justify-between items-center mt-4">
                <p className="text-md font-semibold text-[#928D8B]">
                  Order Total
                </p>
                <p className="text-2xl font-bold text-[#483A37]">
                  ${getDiscountedPrice().toFixed(2)}
                </p>
              </div>

              {couponCode ? (
                <div className="flex items-center justify-between bg-[#FBF7F4] p-2 rounded-md">
                  <p className="text-[#968D8B] text-sm font-bold">
                    Applied: {discountAppliedText}
                  </p>
                  <button
                    onClick={handleRemoveCoupon}
                    className="text-red-500 cursor-pointer text-xs font-semibold hover:underline hover:scale-105"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      placeholder="Enter Coupon Code"
                      className="border border-gray-300 p-2 rounded-md flex-grow text-sm uppercase"
                      value={couponCodeInput}
                      onChange={handleCouponInputChange}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault(); // Prevent form submission or other side effects
                          onCouponApplyClicked();
                        }
                      }}
                    />
                    <button
                      onClick={onCouponApplyClicked}
                      className="hover:scale-105 bg-[#BD7765] cursor-pointer hover:bg-[#A76252] text-white px-4 py-2 rounded-md text-sm"
                    >
                      Apply
                    </button>
                  </div>
                  {couponErrorMsg && (
                    <p className="text-xs text-red-500">{couponErrorMsg}</p>
                  )}
                </div>
              )}
            </div>

            <div className="flex items-center justify-center gap-3 p-4 bg-[#FBF7F4] rounded-sm mt-6">
              <img src={TreeIcon} alt="Carbon Neutral" className="w-5 h-5" />
              <span className="text-sm text-[#968D8B]">
                This is a <span className="font-bold">carbon-neutral</span>{" "}
                delivery
              </span>
            </div>

            <button
              onClick={onCreateOrder}
              className="hover:scale-105 bg-orange-700 cursor-pointer hover:bg-orange-800 text-[#E7AB91] font-semibold py-3 px-8 mt-8 rounded-full shadow-lg transition-all duration-300 ease-in-out w-full"
            >
              Confirm Order
            </button>
          </>
        )}
      </div>
    </div>
  );
};
