import { useState } from "react";

export default function Increment() {
  const [counter, setCounter] = useState(15);

  const addvalue = () => {
    if (counter < 20) {
      setCounter((prevCounter) => {
        console.log("Button Pressed:", prevCounter + 1);
        return prevCounter + 1;
      });
    }
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <h1>Original Value: 15</h1>
          <h2>Updated value: {counter}</h2>

          <button onClick={addvalue} className="bg-[green] p-[3px]">
            Add Values
          </button>
          <button>Remove Values</button>
        </div>
      </div>
    </>
  );
}
