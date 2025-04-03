import { Counter } from "../Counter/counter";
import { useCount } from "../Counter/use-count";

const MAX_COUNT = 5;
const MIN_COUNT = 0;

export const Dish = ({ dish }) => {
  const { count, increment, decrement } = useCount(MAX_COUNT, MIN_COUNT);
  return (
    <>
      {dish.name}
      <Counter
        count={count}
        min={MIN_COUNT}
        max={MAX_COUNT}
        increment={increment}
        decrement={decrement}
      />
    </>
  );
};
