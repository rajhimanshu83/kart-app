import { useState } from "react";
import EmptyCartIcon from "../assets/icons/empty-cart-icon.png";
import CrossIcon from "../assets/icons/cross-icon.png";
import TreeIcon from "../assets/icons/tree-icon.png";
import { CartSummarySkeleton } from "./CartSummarySkeleton";

const CartSummarySection = ({
  cartItems = [],
  removeItem,
  getTotalItems,
  onCreateOrder,
  couponCode,
  discountAppliedText,
  handleApplyCoupon,
  getDiscountedPrice,
  resetCoupon,
  isLoading
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
    setCouponErrorMsg("");
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
    <div className="flex flex-col items-center justify-center w-full h-60 text-[#988A87]">
      <img
        src={EmptyCartIcon}
        alt="Empty cart"
        className="w-28 h-28 mb-6"
      />
      <p className="text-base font-medium text-center">
        Your added items will appear here
      </p>
    </div>
  );

  const renderLoadingCart = () => {
    return (    <div className="w-full lg:w-96 flex flex-shrink-0 justify-center">
      <div className="flex flex-col p-6 w-full bg-white rounded-lg shadow-sm transition-all">
        <CartSummarySkeleton/>
      </div>
      </div>
      )
  }

  if(isLoading) {
    return renderLoadingCart();
  }

  return (
    <div className="w-full lg:w-96 flex flex-shrink-0 justify-center">
      <div className="flex flex-col p-6 w-full bg-white rounded-lg shadow-sm transition-all">
        <h2 className="text-2xl font-semibold text-center text-[#BD7765] mb-6">
          Your Cart ({cartItemCount})
        </h2>

        {cartItemCount === 0 ? (
          renderEmptyCart()
        ) : (
          <>
            <div className="space-y-4 overflow-y-auto max-h-64 pr-2">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="relative flex flex-col gap-1 p-2 border-b border-gray-200"
                >
                  <span className="text-sm font-semibold text-[#716A67]">
                    {item.name}
                  </span>
                  <div className="flex items-center text-sm">
                    <span className="text-[#C08778] font-bold mr-2">
                      {item.quantity}x
                    </span>
                    <span className="text-[#B2A8A6] font-semibold">
                      @${item.price.toFixed(2)}   $
                      {(item.quantity * item.price).toFixed(2)}
                    </span>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="absolute cursor-pointer right-2 top-1/2 -translate-y-1/2 hover:scale-110 transition"
                    aria-label="Remove item"
                  >
                    <img src={CrossIcon} alt="Remove" className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center mt-6">
              <p className="text-lg font-semibold text-[#928D8B]">
                Order Total
              </p>
              <p className="text-2xl font-bold text-[#483A37]">
                ${getDiscountedPrice().toFixed(2)}
              </p>
            </div>

            {couponCode ? (
              <div className="flex items-center justify-between bg-[#FBF7F4] p-2 rounded-md mt-4">
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
              <div className="flex flex-col gap-1 mt-4">
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Enter Coupon Code"
                    className="border border-gray-300 p-2 rounded-md flex-grow text-sm uppercase"
                    value={couponCodeInput}
                    onChange={handleCouponInputChange}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        onCouponApplyClicked();
                      }
                    }}
                  />
                  <button
                    onClick={onCouponApplyClicked}
                    className="hover:scale-105 cursor-pointer bg-[#BD7765] text-white px-4 py-2 rounded-md text-sm"
                  >
                    Apply
                  </button>
                </div>
                {couponErrorMsg && (
                  <p className="text-xs text-red-500">{couponErrorMsg}</p>
                )}
              </div>
            )}

            <div className="flex items-center justify-center gap-3 p-4 bg-[#FBF7F4] rounded-sm mt-6">
              <img src={TreeIcon} alt="Carbon Neutral" className="w-5 h-5" />
              <span className="text-sm text-[#968D8B] text-center">
                This is a <span className="font-bold">carbon-neutral</span> delivery
              </span>
            </div>

            <button
              onClick={onCreateOrder}
              className="hover:scale-105 cursor-pointer bg-orange-700 hover:bg-orange-800 text-white font-semibold py-3 px-8 mt-8 rounded-full shadow-md transition-all w-full"
            >
              Confirm Order
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CartSummarySection;
