import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import SignUp from "./components/Sign/SignUp";
import Login from "./components/Sign/Login";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
      
    </>
  );
}

export default App;
