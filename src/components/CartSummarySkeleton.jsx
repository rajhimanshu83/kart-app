export const CartSummarySkeleton = () => {
  return (
    <div className="p-4 space-y-4 animate-pulse flex flex-col items-center justify-center">
      <div className="h-6 bg-gray-300 rounded w-1/2" />
      <div className="h-4 bg-gray-300 rounded w-1/3" />
      <div className="h-24 bg-gray-300 rounded w-full max-w-md" />
      <div className="h-10 bg-gray-300 rounded w-1/2" />
    </div>
  );
};
