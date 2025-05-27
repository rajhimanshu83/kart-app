import { useState, useEffect } from "react";

export function useScreenSize() {
  const [screenSize, setScreenSize] = useState("desktop");

  useEffect(() => {
    function updateScreenSize() {
      const width = window.innerWidth;
      if (width < 640) {
        setScreenSize("mobile");
      } else if (width < 1024) {
        setScreenSize("tablet");
      } else {
        setScreenSize("desktop");
      }
    }

    updateScreenSize(); // Initial check
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  return screenSize;
}
