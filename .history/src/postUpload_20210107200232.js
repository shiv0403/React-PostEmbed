import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { storage, db } from "./firebase";

function postUpload() {
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
  };

  return (
    <div className="post_upload">
      <input
        type="text"
        placeholder="Enter a caption..."
        onChange={(event) => setCaption(event)}
      />
      <input type="file" onChange={handleChange} />
      <Button onClick={handleUpload}>Upload</Button>
    </div>
  );
}

export default postUpload;
