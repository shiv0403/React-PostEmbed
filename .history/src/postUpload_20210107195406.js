import React, { useState } from "react";
import { Button } from "@material-ui/core";

function postUpload() {
  const [caption, setCaption] = useState();

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
