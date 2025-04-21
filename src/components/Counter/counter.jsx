import CounterStyle from './counter.module.css';
import { Button } from '../Button/button';


export const Counter = ({ count, increment, decrement }) => {
  return (
    <div>
      <Button title='-' onClick={decrement} size='400' />
      <span className={CounterStyle.count}>{count}</span>
      <Button title='+' onClick={increment} size='400' />
    </div>
  );
};
