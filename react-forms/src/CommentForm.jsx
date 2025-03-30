// import { useState } from "react";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = "Please enter valid username";
  } else if (values.username.length > 15) {
    errors.username = "Must be 15 characters or less";
  }

  if (!values.review) {
    errors.review = "Please enter valid username";
  } else if (values.review.length > 20) {
    errors.review = "Must be 20 characters or less";
  }

  if (!values.rating) {
    errors.rating = "Please provide valid number";
  }

  return errors;
};

export default function CommentForm({ fn }) {
  // let [commentData, setCommentData] = useState({
  //   username: "",
  //   review: "",
  //   rating: 5,
  // });

  const formik = useFormik({
    initialValues: {
      username: "",
      review: "",
      rating: 5,
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  // function handleInputChange(event) {
  //   setCommentData((commentData) => {
  //     return { ...commentData, [event.target.name]: event.target.value };
  //   });
  // }

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   fn(commentData);
  //   setCommentData({
  //     username: "",
  //     review: "",
  //     rating: 5,
  //   });
  // }

  return (
    <div>
      <h3>Comment Section</h3>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          placeholder="enter your name"
          name="username"
          onChange={formik.handleChange}
          value={formik.values.username}
        />{" "}
        <br />
        {formik.errors.username ? (
          <div style={{ color: "red" }}>{formik.errors.username}</div>
        ) : null}
        <br />
        <textarea
          placeholder="enter your review"
          name="review"
          value={formik.values.review}
          onChange={formik.handleChange}
        ></textarea>{" "}
        <br />
        {formik.errors.review ? (
          <div style={{ color: "red" }}>{formik.errors.review}</div>
        ) : null}
        <br />
        <input
          type="number"
          min={1}
          max={5}
          name="rating"
          value={formik.values.rating}
          onChange={formik.handleChange}
        />{" "}
        <br />
        {formik.errors.rating ? (
          <div style={{ color: "red" }}>{formik.errors.rating}</div>
        ) : null}
        <br />
        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
}
