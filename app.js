import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Navbar";
import MainContainer from "./MainContainer";

function App() {
  return (
    <Router>
      <Navbar />
      <MainContainer />
    </Router>
  );
}

export default App;