import React, { useContext } from "react";
import ComponentF from "./ComponentF";
import { FirstnameContext, SurNameContext } from "../App";

function ComponentE() {
  const fistName = useContext(FirstnameContext);
  const surName = useContext(SurNameContext);
  return (
    <div>
      {fistName} and {surName}
    </div>
  );
}

export default ComponentE;
