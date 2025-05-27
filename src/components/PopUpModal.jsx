export const PopUpModal = ({ isOpen, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="
          relative rounded-xl
          h-[95vh] sm:h-[90vh] md:h-[95vh] 
          overflow-hidden
          flex flex-col
          bg-transparent
          w-full
        "
      >
        <div
          className="flex-1 overflow-y-auto sm:p-6"
          style={{
            scrollbarWidth: 'none', // Firefox
            msOverflowStyle: 'none', // IE/Edge
          }}
        >
          <div className="no-scrollbar">{children}</div>
        </div>
        <style jsx>{`
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    </div>
  );
};
