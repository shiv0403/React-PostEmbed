import React, { useState, useEffect } from "react";
import "./Post.css";
import { IconButton } from "@material-ui/core";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import SendIcon from "@material-ui/icons/Send";
import TurnedInNotIcon from "@material-ui/icons/TurnedInNot";
import { makeStyles } from "@material-ui/core/styles";
import firebase from "firebase";
import { db } from "./firebase";

const footerStyle = makeStyles({
  root: {
    fontSize: "1.7rem",
  },
});

function Post({ imageUrl, caption, username, postId, user }) {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState([]);

  useEffect(() => {
    let unsubscribe;
    if (postId) {
      unsubscribe = db
        .collection("posts")
        .doc(postId)
        .collection("comments")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          setComments(snapshot.docs.map((doc) => doc.data()));
        });
    }

    return () => {
      unsubscribe();
    };
  }, [postId]);

  const handleComment = (e) => {
    e.preventDefault();
    db.collection("posts").doc(postId).collection("comments").add({
      text: comment,
      username: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setComment("");
  };

  const footerButtonsStyle = footerStyle();

  return (
    <div className="post">
      {/* avatar + username + moreHoriz*/}
      <div className="post_header">
        <div className="post_header_about">
          <IconButton>
            <PersonOutlineIcon fontSize="medium" />
          </IconButton>
          <h4>{username}</h4>
        </div>
        <div className="post_header_more">
          <IconButton>
            <MoreHorizIcon />
          </IconButton>
        </div>
      </div>
      {/* image */}
      <div className="post_image">
        <img src={imageUrl} alt="" />
      </div>
      {/* like + comment + share + turnedIn */}
      <div className="post_footer">
        <div className="post_footer_status">
          <IconButton>
            <FavoriteBorderIcon className={footerButtonsStyle.root} />
          </IconButton>
          <IconButton>
            <ChatBubbleOutlineIcon className={footerButtonsStyle.root} />
          </IconButton>
          <IconButton>
            <SendIcon className={footerButtonsStyle.root} />
          </IconButton>
        </div>
        <div className="post_footer_save">
          <IconButton>
            <TurnedInNotIcon className={footerButtonsStyle.root} />
          </IconButton>
        </div>
      </div>
      {/* username + caption */}
      <div className="post_caption">
        <p>
          <strong>{username} </strong>
          {caption}
        </p>
      </div>

      <div className="post_comments">
        {comments.map((comment) => {
          return (
            <p className="post_single_comment">
              <strong>{comment.username}</strong>
              {"  "}
              {comment.text}
            </p>
          );
        })}
      </div>

      {user && (
        <div className="post_addComment">
          <form onSubmit={handleComment} className="post_comment">
            <input
              type="text"
              placeholder="Add a comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <button disabled={!comment} className="post_addComment_button">
              Post
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Post;
