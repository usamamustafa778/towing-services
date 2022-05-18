import "./App.css";
import Home from "./Pages/Home";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useParams } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <ScrollToTop /> */}
        <Home />
      </BrowserRouter>
    </>
  );
}

export default App;
