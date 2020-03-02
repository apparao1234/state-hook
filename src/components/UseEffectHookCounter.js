import React, { useState, useEffect } from "react";

function UseEffectHookCounter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState();

  //This will be called after all renderings of the component.
  //it will replace life cycle methods of calss like componentDidMount(),componentDidUpdate(),componentWillUnmount()
  useEffect(() => {
    console.log("in side useEffect");
    document.title = `you clicked ${count}times`;
  }, [count]);

  return (
    <div>
      <input type='text' value={name} onChange={e => setName(e.target.value)} />
      <button onClick={() => setCount(count + 1)}>click {count} times</button>
    </div>
  );
}

export default UseEffectHookCounter;
