import { useState } from "react";

export const useCount = (maxCount, minCount) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < maxCount) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > minCount) {
      setCount(count - 1);
    }
  };

  return { count, increment, decrement };
};
