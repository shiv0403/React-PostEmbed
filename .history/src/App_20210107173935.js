import React, { useState, useEffect } from "react";
import "./App.css";
import { db } from "./firebase";
import Post from "./Post";

function App() {
  const [posts, setPosts] = useState([
    {
      caption: "This is my first post",
      imageUrl: "https://cdn.auth0.com/blog/illustrations/reactjs.png",
      username: "shiv0403",
    },
    {
      caption: "This is my second post",
      imageUrl:
        "https://static.frontendmasters.com/assets/courses/2019-04-05-js-recent-parts/thumb@2x.jpg",
      username: "shiv0403",
    },
  ]);

  useEffect(() => {
    db.collection().onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map(doc => {
        doc.data;
      })));
    });
  }, []);

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
      {posts.map((post) => {
        return (
          <Post
            username={post.username}
            caption={post.caption}
            imageUrl={post.imageUrl}
          />
        );
      })}
    </div>
  );
}

export default App;
