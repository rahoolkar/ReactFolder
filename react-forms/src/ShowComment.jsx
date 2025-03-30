import { useState } from "react";
import CommentForm from "./CommentForm";
import "./Comment.css";

export default function ShowComment() {
  let [comments, setComments] = useState([]);

  function addNewData(comment) {
    setComments((comments) => {
      return [ ...comments, comment ];
    });
  }
  return (
    <div>
      <CommentForm fn={addNewData}></CommentForm>
      <hr />
      <h3>All Comments</h3>
      <div className="AllComments">
        {comments.map((comment,index) => {
          return (
            <div className="Comment" key={index}>
              <p>{comment.review}</p>
              <p>{comment.rating}stars</p>
              <p>{comment.username}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
