import { useState } from "react";

function App() {
  const [rangeValue, setRangeValue] = useState(5);

  const [count, setCount] = useState(0);

  const today = new Date();
  const updatedDate = new Date();
  updatedDate.setDate(today.getDate() + count);

  const dateMessage =
    count === 0 ? "Today" : `${count} day${count > 1 ? "s" : ""} from today`;

  const handleRangeChange = (e) => {
    setRangeValue(parseInt(e.target.value));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
      <div className="bg-gray-800 shadow-lg rounded-2xl p-6 w-full max-w-md">
        <div className="flex flex-col gap-2 mb-6">
          <input
            id="range"
            onChange={handleRangeChange}
            type="range"
            name="range"
            min="1"
            max="10"
            value={rangeValue}
            className="w-full accent-blue-400 cursor-pointer"
          />
          <label
            htmlFor="range"
            className="text-center font-semibold text-blue-300"
          >
            {rangeValue}
          </label>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
          <button
            onClick={() => {
              if (count - rangeValue < 0) {
                setCount(0);
              } else {
                setCount(count - rangeValue);
              }
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition cursor-pointer"
          >
            Decrement
          </button>
          <input
            type="text"
            value={count}
            readOnly
            className="w-20 text-center bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white cursor-not-allowed"
          />
          <button
            onClick={() => setCount(count + rangeValue)}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition"
          >
            Increment
          </button>
        </div>

        <div className="text-center text-blue-200 font-medium">
          <p>
            {dateMessage}: {updatedDate.toDateString()}
          </p>
        </div>

        <div>
          <button
            onClick={() => {
              setCount(0);
              setRangeValue(5);
            }}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition mt-4 w-full"
          >
            Reset
          </button>
        </div>


      </div>
    </div>
  );
}

export default App;
