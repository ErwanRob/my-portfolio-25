import { useState, useEffect } from "react";
import useMediaQuery from "./useMediaQuery";

const useResponsiveRows = () => {
  const [rows, setRows] = useState({ minRows: 15, maxRows: 25 });

  const isSmallHeightThreshold = useMediaQuery("(max-height: 768px)");
  const isMediumHeightThreshold = useMediaQuery("(max-height: 900px)");
  const isLargeHeightThreshold = useMediaQuery("(max-height: 1024px)");

  useEffect(() => {
    const updateRows = () => {
      const windowWidth = window.innerWidth;

      // Height has priority over width.
      if (isSmallHeightThreshold) {
        // When height is below 768px
        setRows({ minRows: 2, maxRows: 5 });
      } else if (isMediumHeightThreshold) {
        // When height is below 900px (but not below 768px)
        setRows({ minRows: 4, maxRows: 8 });
      } else if (isLargeHeightThreshold) {
        // // When height is below 1024px (but not below 900px)
        setRows({ minRows: 5, maxRows: 10 });
      } else if (windowWidth < 1024) {
        // When height is high enough but the width is less than 1024px
        setRows({ minRows: 5, maxRows: 10 });
      } else {
        // Fallback for high height and wide width AHHHHHHH finally
        setRows({ minRows: 15, maxRows: 20 });
      }
    };

    updateRows();
    window.addEventListener("resize", updateRows);
    return () => window.removeEventListener("resize", updateRows);
  }, [isSmallHeightThreshold, isMediumHeightThreshold, isLargeHeightThreshold]);

  return rows;
};

export default useResponsiveRows;
