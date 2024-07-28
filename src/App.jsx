import React from "react";
import Header from "./components/Header";
import InputTeam from "./components/InputTeam";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <InputTeam />
      </div>
    </div>
  );
};

export default App;
