import React, { useState, useEffect } from "react";

function UseEffectHookCounter() {
  const [count, setCount] = useState(0);

  //This will be called after all renderings of the component.
  //it will replace life cycle methods of calss like componentDidMount(),componentDidUpdate(),componentWillUnmount()
  useEffect(() => {
    document.title = `you clicked ${count}times`;
  });

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>click {count} times</button>
    </div>
  );
}

export default UseEffectHookCounter;
