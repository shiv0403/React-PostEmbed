import React from "react";
import { IconButton } from "@material-ui/core";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";

function Post() {
  return (
    <div className="post">
      {/* avatar + username + moreHoriz*/}
      <IconButton>
        <PersonOutlineIcon fontSize="large" />
      </IconButton>
      {/* image */}
      {/* like + comment + share + turnedIn */}
      {/* username + caption */}
    </div>
  );
}

export default Post;
