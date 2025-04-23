import { Counter } from "../Counter/counter";
import { useCount } from "../Counter/use-count";

export const DishCounter = () => {
  const { count, increment, decrement } = useCount();

  return <Counter count={count} increment={increment} decrement={decrement} />;
};
