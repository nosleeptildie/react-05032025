import { useCount } from "./use-count";
const maxCount = 5;
const minCount = 0;

export const Counter = () => {
  const { count, increment, decrement } = useCount(maxCount, minCount);
  return (
    <div>
      <button disabled={count === maxCount} onClick={increment}>
        +
      </button>
      {count}
      <button disabled={count === minCount} onClick={decrement}>
        -
      </button>
    </div>
  );
};
