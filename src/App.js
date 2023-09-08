import React from "react";
import "./App.css";
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
      <div className="head">
      <h6 className="executor">Weather by Tetiana Bordan</h6>
     <Search defaultCity="Mukilteo" />
    </div>
      </header>
      <div className="footer">
      <a
        rel="noreferrer"
        href="https://github.com/dentistbordan/weather-react-pro"
        target="_blank"
        className="link"
      >
        Here is GitHub 
      </a>{" "}
       <span className="name-app"> by Tetiana Bordan</span>
    </div>
    </div>
    </div>
  );
};
