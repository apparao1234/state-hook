import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CounterReducer from "./components/CounterReducer";

function App() {
  return (
    <div className='App'>
      <CounterReducer value={"Karunya"}></CounterReducer>
    </div>
  );
}

export default App;
