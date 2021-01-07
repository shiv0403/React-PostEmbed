import React from "react";

function postUpload() {
  return (
    <div className="post_upload">
      <input type="text" placeholder="Enter a caption..." />
      <input type="file" onChange={handleChange} />
    </div>
  );
}

export default postUpload;
