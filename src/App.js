import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ComponentC from "./components/ComponentC";

//the context is exported to use in other component
//where consumer configured
export const FirstnameContext = React.createContext();
export const SurNameContext = React.createContext();

function App() {
  return (
    <div className='App'>
      <FirstnameContext.Provider value={"Karunya"}>
        <SurNameContext.Provider value={"G"}>
          <ComponentC />
        </SurNameContext.Provider>
      </FirstnameContext.Provider>
    </div>
  );
}

export default App;
