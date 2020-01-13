import React from "react";
import "./App.css";
import List from "./components/List";

function App(props) {
  return (
    <div className="App">
      <h1>Pokemon Database</h1>
      <List></List>
    </div>
  );
}

export default App;
