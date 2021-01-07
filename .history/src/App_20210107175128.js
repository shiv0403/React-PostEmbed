import React, { useState, useEffect } from "react";
import "./App.css";
import { db } from "./firebase";
import Post from "./Post";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          post: doc.data(),
        }))
      );
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
      {posts.map({id,post}) => {
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
