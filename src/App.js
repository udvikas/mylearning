import React from "react";
import "./App.css";
import ContextProvider from "./Context/ContextProvider";
import Input from "./Input/Input";
import Navbar from "./Navbar/Navbar";

function App() {
  return (
    <>
      <ContextProvider>
        <Navbar />
        <Input />
      </ContextProvider>
    </>
  );
}

export default App;
