import React from "react";
import "./App.css";
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="container">
      <h6 className="executor">Weather by Tetiana Bordan</h6>
     <Search defaultCity="Odesa" />
    </div>
      </header>
    </div>
  );
};
