export default function ProductsLayout({ children, error }) {
  return (
    <div className="min-h-screen flex justify-center items-center bg-[#FCF8F5] font-sans text-[#1f2937]">
      <div className="flex flex-col lg:flex-row gap-8 w-full max-w-7xl p-4 lg:p-8 box-border">
        {error ? (
          <div className="flex flex-col items-center justify-center w-full min-h-[70vh] text-center space-y-4">
            <p className="text-lg font-semibold text-red-600">
              Failed to load products. Please try again.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
            >
              Refresh Page
            </button>
          </div>
        ) : (
          children
        )}
      </div>
    </div>
  );
}
