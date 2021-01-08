import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { storage, db } from "./firebase";
import firebase from "firebase";
import "./PostUpload.css";

function PostUpload({ username }) {
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target?.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (err) => {
        console.log(err);
        alert(err.message);
      },
      () => {
        console.log(image.name);
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            db.collection("posts").add({
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              caption: caption,
              imageUrl: url,
              username: username,
            });
            setCaption("");
            setImage(null);
            setProgress(0);
          });
      }
    );
  };

  return (
    <div className="postUpload">
      <div className="postUpload_form">
        <div className="postUpload_form_select">
          <progress value={progress} max="100" />
          <input
            type="text"
            placeholder="Enter a caption..."
            value={caption}
            onChange={(event) => setCaption(event.target.value)}
          />
        </div>
        <div className="postUpload_form_upload">
          <input type="file" onChange={handleChange} />
          <Button onClick={handleUpload}>Upload</Button>
        </div>
      </div>
    </div>
  );
}

export default PostUpload;
