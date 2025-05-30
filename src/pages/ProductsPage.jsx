import { useState, useCallback, useEffect } from "react";
import ProductsLayout from "../layout/ProductsLayout";
import ProductGridSection from "../components/ProductGridSection";
import CartSummarySection from "../components/CartSummarySection";
import FloatingCartButton from "../components/buttons/FloatingCartButton";
import { BottomDrawer } from "../components/BottomDrawer";
import { PopUpModal } from "../components/PopUpModal";
import OrderSummarySection from "../components/OrderSummarySection";
import LoadingOverlay from "../components/LoadingOverlay";
import { useScreenSize } from "../hooks/useScreenSize";
import { createOrder } from "../services/orderService";
import { useProducts } from "../hooks/useProducts";
import { useCart } from "../hooks/useCart";

function ProductsPage() {

  const { products, isProductsLoading: productsLoading, error } = useProducts();

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

  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [isOrderSuccessful, setIsOrderSuccessful] = useState(false);
  const [finalOrderItems, setFinalOrderItems] = useState([]);
  const [finalOrderPrice, setFinalOrderPrice] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (screenSize === "desktop" && isCartModalOpen) {
      setIsCartModalOpen(false);
    }
  }, [screenSize, isCartModalOpen]);

  const handleAddToCart = useCallback(
    (product) => {
      addItem(product, 1);
    },
    [addItem]
  );

  const onCreateOrder = useCallback(async () => {
    if (isCartModalOpen) setIsCartModalOpen(false);
    setLoading(true);
    try {
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
    } finally {
      setLoading(false);
    }
  }, [cartItems, clearCart, isCartModalOpen]);

  const startNewOrder = useCallback(() => {
    setIsOrderSuccessful(false);
  }, []);

  return (
    <ProductsLayout error={error}>
      <div className="grid lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8">
          <ProductGridSection
            products={products}
            onAddToCart={handleAddToCart}
            cartItems={cartItems}
            updateQuantity={updateQuantity}
            isLoading={productsLoading}
          />
        </div>

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
              isLoading={productsLoading}
            />
          </div>
        </div>
      </div>

      <FloatingCartButton
        setIsCartModalOpen={setIsCartModalOpen}
        getTotalItems={getTotalItems}
      />

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
          isLoading={productsLoading}
        />
      </BottomDrawer>

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

      {loading && <LoadingOverlay />}
    </ProductsLayout>
  );
}

export default ProductsPage;
