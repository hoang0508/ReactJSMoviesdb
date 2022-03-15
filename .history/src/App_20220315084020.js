import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./components/layout/Main";
import HomePage from "./components/pages/HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Main />}>
          <Route path="/" element={<HomePage />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
