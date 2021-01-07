import React from "react";
import { Button } from "@material-ui/core";

function postUpload() {
  return (
    <div className="post_upload">
      <input type="text" placeholder="Enter a caption..." />
      <input type="file" onChange={handleChange} />
      <Button onClick={handleUpload}>Upload</Button>
    </div>
  );
}

export default postUpload;
