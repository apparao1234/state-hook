import React from "react";
import { FirstnameContext, SurNameContext } from "../App";

function ComponentF() {
  return (
    <div>
      <FirstnameContext.Consumer>
        {firstName => {
          return (
            <SurNameContext.Consumer>
              {surName => {
                return (
                  <div>
                    the first name is {firstName}The SurName is {surName}
                  </div>
                );
              }}
            </SurNameContext.Consumer>
          );
        }}
      </FirstnameContext.Consumer>
    </div>
  );
}

export default ComponentF;
