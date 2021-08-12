import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { decrease, increase, increaseByValue } from "../modules/counter";

const Counter = () => {
  const dispatch = useDispatch();
  const { number } = useSelector(({ counter }) => ({ number: counter.number }));
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
  const onIncreaseByValue = useCallback(() => dispatch(increaseByValue(5)), [dispatch]);

  return (
    <div>
      <h1>{number}</h1>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
        <button onClick={onIncreaseByValue}>수치만큼 증가</button>
      </div>
    </div>
  );
};

export default React.memo(Counter);
