export default function ProductsLayout({ children }) {
  return (
    <div className="min-h-screen flex justify-center bg-[#FCF8F5] font-sans text-[#1f2937]">
      <div className="flex flex-col lg:flex-row gap-8 w-full max-w-7xl p-4 lg:p-8 box-border">
        {children}
      </div>
    </div>
  );
}
