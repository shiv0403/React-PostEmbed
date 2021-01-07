import React, { useState } from "react";
import "./App.css";
import Post from "./Post";

function App() {
  const [posts, setPosts] = useState([
    {
      caption: "This is my first post",
      imageUrl: "https://cdn.auth0.com/blog/illustrations/reactjs.png",
      username: "shiv0403",
    },
    {
      caption: "This is my first post",
      imageUrl: "https://cdn.auth0.com/blog/illustrations/reactjs.png",
      username: "shiv0403",
    },
  ]);

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
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default App;
