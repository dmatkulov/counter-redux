import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../app/store';
import {useEffect} from 'react';
import {fetchCounter, increaseCounter} from './counterThunks';
import {
  add,
  decrement,
  subtract
} from './counterSlice';

const Counter = () => {
  const counterValue = useSelector((state: RootState) => state.counter.value);
  const counterIsLoading = useSelector((state: RootState) => state.counter.isLoading);
  const dispatch: AppDispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchCounter());
  }, [dispatch]);
  
  const onIncrement = async () => {
    await dispatch(increaseCounter());
    await dispatch(fetchCounter());
  };
  
  return (
    <div>
      <h1>{counterIsLoading ? 'Loading' : counterValue}</h1>
      <button onClick={onIncrement}>Increase</button>
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