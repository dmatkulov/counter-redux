import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../app/store';
import {add, decrement, increment, subtract} from './counterSlice';

const Counter = () => {
  const counterValue = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  
  
  return (
    <div>
      <h1>{counterValue}</h1>
      <button onClick={() => dispatch(increment())}>Increase</button>
      &nbsp;
      <button onClick={() => dispatch(decrement())}>Decrease</button>
      &nbsp;
      <button onClick={() => dispatch(add(5))}>Increase by 5</button>
      &nbsp;
      <button onClick={() => dispatch(subtract(5))}>Decrease by 5</button>
      &nbsp;
    </div>
  );
};

export default Counter;