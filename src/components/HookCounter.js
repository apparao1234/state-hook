import React, { useState } from "react";

function HookCounter() {
  //0 is setting default value.
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </div>
  );
}

export default HookCounter;
