const LoadingOverlay = () => {
  return (
    <div className="fixed inset-0 z-50 bg-gray-200 bg-opacity-50 flex items-center justify-center">
      <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingOverlay;
