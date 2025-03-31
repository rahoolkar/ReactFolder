import { useState } from "react";

export default function CommentForm({fn}) {
  let [commentData, setCommentData] = useState({
    username: "",
    review: "",
    stars: 5,
  });

  function handleInputChange(event) {
    setCommentData((commentData) => {
      return { ...commentData, [event.target.name]: event.target.value };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(commentData);
    fn(commentData);
    setCommentData({ username: "", review: "", stars: 5 });
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter username"
          name="username"
          value={commentData.username}
          onChange={handleInputChange}
        /> <br /><br />
        <textarea
          name="review"
          placeholder="write something"
          value={commentData.review}
          onChange={handleInputChange}
        ></textarea> <br /><br />
        <input
          type="number"
          name="stars"
          max={5}
          min={1}
          value={commentData.stars}
          onChange={handleInputChange}
        /> <br /><br />
        <button type="submit" onClick={handleSubmit}>
          Add Comment
        </button>
      </form>
    </div>
  );
}
