import React, { useState, useEffect } from "react";

function UseEffectHookCounter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState();

  //This will be called after all renderings of the component.
  //it will replace life cycle methods of calss like componentDidMount(),componentDidUpdate(),componentWillUnmount()
  //TO exeucate useEffect based on conditon, we have to add second parameter that is array.If any change of those
  //params are there then only it will render
  useEffect(() => {
    console.log("in side useEffect");
    document.title = `you clicked ${count}times`;
  }, [count]);

  return (
    <div>
      <input type='text' value={name} onChange={e => setName(e.target.value)} />
      <button type='submit' onClick={() => setCount(count + 1)}>
        click {count} times
      </button>
    </div>
  );
}

export default UseEffectHookCounter;
