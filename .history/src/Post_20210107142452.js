import React from "react";
import "./Post.css";
import { IconButton } from "@material-ui/core";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

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
        <div className="post_header_more">
          <IconButton>
            <MoreHorizIcon />
          </IconButton>
        </div>
      </div>
      {/* image */}
      <div className="post_image">
        <img
          className="post_image_img"
          src="https://cdn.auth0.com/blog/illustrations/reactjs.png"
          alt=""
        />
      </div>
      {/* like + comment + share + turnedIn */}
      {/* username + caption */}
    </div>
  );
}

export default Post;
