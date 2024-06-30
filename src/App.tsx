import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const { value } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex border border-purple-300 bg-slate-50 p-10">
        <button
          onClick={() => dispatch(incrementByAmount(5))}
          className=" bg-green-600 px-3 py-2 rounded-md text-xl text-white font-semibold mr-5"
        >
          Increment by 5
        </button>
        <button
          onClick={() => dispatch(increment())}
          className=" bg-green-600 px-3 py-2 rounded-md text-xl text-white font-semibold"
        >
          Increment
        </button>

        <h2 className="text-3xl mx-10 text-black">{value} </h2>
        <button
          onClick={() => dispatch(decrement())}
          className=" bg-red-500 px-3 py-2 rounded-md text-xl text-white font-semibold"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
