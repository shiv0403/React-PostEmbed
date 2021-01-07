import React from "react";
import "./App.css";
import Post from "./Post";

function App() {
  return (
    <div className="app">
      <div className="app_header">
        <img
          className="app_header_logo"
          src="https://www.vectorlogo.zone/logos/instagram/instagram-wordmark.svg"
          alt=""
        />
      </div>

      {/* posts */}
      <Post />
      {/*  */}
    </div>
  );
}

export default App;
