import React, { useState } from "react";

function HookCounterTwo() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  //instead of prevCount , we can give any name.Even we can give count also.
  //for setCount ,we are calling arrow fuction wit param (prevCount).This param holds the previous count value.
  const incrementByFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount(prevCount => prevCount + 1);
    }
  };

  return (
    <div>
      Count:{count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>
        Decrement
      </button>
      <button onClick={incrementByFive}>incrementByFive</button>
    </div>
  );
}

export default HookCounterTwo;
