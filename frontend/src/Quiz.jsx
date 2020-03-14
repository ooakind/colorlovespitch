import React, { Component } from "react";
import AppContext from "./AppContext";

const Quiz = () => {
  return (
    <div>
      <AppContext.Consumer>
        {value => value.pitches.map(p => <div>{p.name}</div>)}
      </AppContext.Consumer>
    </div>
  );
};

export default Quiz;
