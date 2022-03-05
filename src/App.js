import React, { useEffect } from "react";
import "./App.css";
import Home from "./components/Home";

const App = ({ hideLoader }) => {
  useEffect(hideLoader, [hideLoader]);

  return (
    <>
      <Home />
    </>
  );
};

export default App;
