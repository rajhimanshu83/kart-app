import { useState, useCallback, useEffect } from "react";
import ProductsLayout from "../layout/ProductsLayout";
import { ProductGridSection } from "../components/ProductGridSection";
import { CartSummarySection } from "../components/CartSummarySection";
import FloatingCartBtn from "../components/FloatingCartBtn";
import { BottomDrawer } from "../components/BottomDrawer";
import { PopUpModal } from "../components/PopUpModal";
import OrderSummarySection from "../components/OrderSummarySection";
import LoadingOverlay from "../components/LoadingOverlay";
import { ProductGridSkeleton } from "../components/ProductGridSkeleton";
import { useScreenSize } from "../hooks/useScreenSize";
import { createOrder } from "../services/orderService";
import { useProducts } from "../hooks/useProducts";
import { useCart } from "../hooks/useCart";

function ProductsPage() {
  const { products, isLoading: productsLoading } = useProducts();

  const {
    cartItems,
    addItem,
    removeItem,
    updateQuantity,
    getTotalPrice,
    clearCart,
    getTotalItems,
    couponCode,
    discountAppliedText,
    handleApplyCoupon,
    getDiscountedPrice,
    resetCoupon,
  } = useCart();

  const screenSize = useScreenSize();

  // Local state
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [isOrderSuccessful, setIsOrderSuccessful] = useState(false);
  const [finalOrderItems, setFinalOrderItems] = useState([]);
  const [finalOrderPrice, setFinalOrderPrice] = useState(0);
  const [loading, setLoading] = useState(false);

  // Close cart modal automatically if switching to desktop
  useEffect(() => {
    if (screenSize === "desktop" && isCartModalOpen) {
      setIsCartModalOpen(false);
    }
  }, [screenSize, isCartModalOpen]);

  // Memoized handler to add product to cart
  const handleAddToCart = useCallback(
    (product) => {
      addItem(product, 1);
    },
    [addItem]
  );

  // Memoized order creation function
  const onCreateOrder = useCallback(async () => {
    if (isCartModalOpen) setIsCartModalOpen(false);
    setLoading(true);

    try {
      // Map cart items to order payload
      const orderItems = cartItems.map(({ id, quantity }) => ({
        productId: id,
        quantity,
      }));

      const orderResponse = await createOrder(orderItems);

      if (orderResponse?.products) {
        setIsOrderSuccessful(true);
        setFinalOrderItems(cartItems);
        setFinalOrderPrice(getDiscountedPrice());
        clearCart();
      }
    } catch (error) {
      console.error("Error creating order:", error);
      // TODO: Show user-friendly error notification here
    } finally {
      setLoading(false);
    }
  }, [cartItems, clearCart, isCartModalOpen]);

  const startNewOrder = useCallback(() => {
    setIsOrderSuccessful(false);
  }, []);

  return (
    <ProductsLayout>
      <div className="grid lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8">
          {productsLoading ? (
            <ProductGridSkeleton />
          ) : (
            <ProductGridSection
              products={products}
              onAddToCart={handleAddToCart}
              cartItems={cartItems}
              updateQuantity={updateQuantity}
            />
          )}
        </div>

        {/* Cart Summary Sidebar for desktop */}
        <div className="hidden lg:block lg:col-span-4">
          <div className="sticky top-4">
            <CartSummarySection
              cartItems={cartItems}
              getTotalPrice={getTotalPrice}
              removeItem={removeItem}
              getTotalItems={getTotalItems}
              onCreateOrder={onCreateOrder}
              couponCode={couponCode}
              discountAppliedText={discountAppliedText}
              handleApplyCoupon={handleApplyCoupon}
              getDiscountedPrice={getDiscountedPrice}
              resetCoupon={resetCoupon}
            />
          </div>
        </div>
      </div>

      {/* Floating cart button for mobile */}
      <FloatingCartBtn
        setIsCartModalOpen={setIsCartModalOpen}
        getTotalItems={getTotalItems}
      />

      {/* Bottom drawer cart for mobile */}
      <BottomDrawer
        isOpen={isCartModalOpen}
        onClose={() => setIsCartModalOpen(false)}
      >
        <CartSummarySection
          cartItems={cartItems}
          getTotalPrice={getTotalPrice}
          removeItem={removeItem}
          getTotalItems={getTotalItems}
          onCreateOrder={onCreateOrder}
          couponCode={couponCode}
          discountAppliedText={discountAppliedText}
          handleApplyCoupon={handleApplyCoupon}
          getDiscountedPrice={getDiscountedPrice}
          resetCoupon={resetCoupon}
        />
      </BottomDrawer>

      {/* Order success summary */}
      {screenSize === "mobile" ? (
        <BottomDrawer
          isOpen={isOrderSuccessful}
          onClose={() => setIsOrderSuccessful(false)}
        >
          <OrderSummarySection
            orderItems={finalOrderItems}
            startNewOrder={startNewOrder}
            finalOrderPrice={finalOrderPrice}
          />
        </BottomDrawer>
      ) : (
        <PopUpModal
          isOpen={isOrderSuccessful}
          onClose={() => setIsOrderSuccessful(false)}
        >
          <OrderSummarySection
            orderItems={finalOrderItems}
            startNewOrder={startNewOrder}
            finalOrderPrice={finalOrderPrice}
          />
        </PopUpModal>
      )}

      {/* Loading overlay */}
      {loading && <LoadingOverlay />}
    </ProductsLayout>
  );
}

export default ProductsPage;
