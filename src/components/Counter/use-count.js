import { useState, useCallback } from "react";

export const useCount = (maxCount, minCount) => {
  const [count, setCount] = useState(minCount);

  const increment = useCallback(() => {
    setCount((count) => Math.min(count + 1, maxCount));
  }, [maxCount]);

  const decrement = useCallback(() => {
    setCount((count) => Math.max(count - 1, minCount));
  }, [minCount]);

  return { count, increment, decrement };
};
