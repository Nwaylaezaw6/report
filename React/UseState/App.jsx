import React from "react";
import './App.css';
import Counter from "./counter/Counter";
import Example from "./counter/example";
import Crud from "./counter/Crud";
function App(){
  return(
    <div className="container">
      {/* <Example/>
      <Counter/> */}
      <Crud />
    </div>
  )
}

export default App;
