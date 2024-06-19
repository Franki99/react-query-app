// import React from 'react';
import FetchButton from "./FetchButton";
import DisplayData from "./DisplayData";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <h1>React Query Example</h1>
      <FetchButton />
      <DisplayData />
    </div>
  );
};

export default App;
