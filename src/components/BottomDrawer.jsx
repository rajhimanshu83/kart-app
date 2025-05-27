export const BottomDrawer = ({ isOpen, onClose, children }) => {
  return (
    <div
      className={`fixed inset-0 z-50 transition-all duration-300 ${
        isOpen ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-opacity-90"
        onClick={onClose}
      ></div>

      {/* Drawer */}
      <div
        className={`fixed bottom-0 left-0 w-full max-h-[90vh] bg-white rounded-t-2xl p-4 shadow-lg transform transition-all duration-300 ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="overflow-y-auto max-h-[80vh] mt-4">{children}</div>
      </div>
    </div>
  );
};
