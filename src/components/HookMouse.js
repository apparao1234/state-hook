import React, { useState, useEffect } from "react";

function HookMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = e => {
    console.log("mouse event");
    setX(e.clientX);
    setY(e.clientY);
  };
  //if there is no condition, then the arry should be empty

  useEffect(() => {
    console.log("useEffect called");
    window.addEventListener("mousemove", logMousePosition);
  }, []);
  return (
    <div>
      Hooks X -{x} Y- {y}
    </div>
  );
}

export default HookMouse;
