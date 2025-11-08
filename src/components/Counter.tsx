import { useSelector } from "react-redux";
import { useAppDispatch, type RootState } from "../app/store";
import Button from "./ui/Button";
import { incrementByAmount } from "../app/features/Counter/CounterSlice";

const Counter = () => {
  const { text, value } = useSelector((state: RootState) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <div>
      <h2>Counter is : {value}</h2>
      <Button
        width="w-fit"
        className="bg-indigo-600"
        onClick={() => dispatch(incrementByAmount(1))}
      >
        {text}
      </Button>
    </div>
  );
};

export default Counter;
