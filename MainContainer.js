MainContainer.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import BlueComponent from "./BlueComponent";
import RedComponent from "./RedComponent";

const MainContainer = () => {
  return (
    <div id="main-section">
      <Routes>
        <Route path="/blue" element={<BlueComponent />} />
        <Route path="/red" element={<RedComponent />} />
      </Routes>
    </div>
  );
};

export default MainContainer;