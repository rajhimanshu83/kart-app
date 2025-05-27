export const BottomDrawer = ({ isOpen, onClose, children }) => {
  return (
    <div
      className={`fixed inset-0 z-50 transition-all duration-300 ${
        isOpen ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <div
        className="absolute inset-0 bg-transparent bg-opacity-90"
        onClick={onClose}
      ></div>

      <div
        className={`fixed bottom-0 left-0 w-full max-h-[90vh] bg-white rounded-t-2xl p-4 shadow-lg transform transition-all duration-300 ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <button
          onClick={onClose}
          aria-label="Close drawer"
          className="absolute top-3 hover:scale-110 cursor-pointer right-3 p-2 rounded-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="overflow-y-auto max-h-[80vh] mt-4">{children}</div>
      </div>
    </div>
  );
};
