import { useState } from "react";
import "./Comment.css";
import CommentForm from "./CommentForm";

export default function CommentBox() {
  let [allComments, setAllComments] = useState([
    {
      username: "rahul",
      review: "nice",
      stars: 3,
    },
  ]);

  function addNewComment(comment) {
    setAllComments((allComments) => {
      return [...allComments, comment];
    });
  }
  return (
    <>
      <CommentForm fn={addNewComment} />
      <hr />

      <h3>All Comments</h3>
      {allComments.map((comment, index) => {
        return (
          <div className="Comment" key={index}>
            <span>{comment.review}</span>
            <span>({comment.stars} stars)</span>
            <p>-@{comment.username}</p>
          </div>
        );
      })}
    </>
  );
}
