import React from "react";
import { IconButton } from "@material-ui/core";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";

function Post() {
  return (
    <div className="post">
      {/* avatar + username + moreHoriz*/}
      <div className="post_header">
        <div className="post_header_about">
          <IconButton>
            <PersonOutlineIcon fontSize="medium" />
          </IconButton>
          <h4>Username</h4>
        </div>
      </div>
      {/* image */}
      {/* like + comment + share + turnedIn */}
      {/* username + caption */}
    </div>
  );
}

export default Post;
