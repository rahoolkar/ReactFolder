import { useState } from "react";

function LikeButton() {
  let [isLiked, setIsLiked] = useState(false);
  let [click, setClick] = useState(0);

  function isClicked() {
    setIsLiked((currentIsLiked)=>{
        return !currentIsLiked;
    });
    setClick((currentClickValue)=>{
        return currentClickValue+1;
    });
  }

  let likeStyle = {
    color: "red",
  };

  return (
    <div>
      <p onClick={isClicked}>
        {isLiked ? (
          <i className="fa-solid fa-heart" style={likeStyle}></i>
        ) : (
          <i className="fa-regular fa-heart"></i>
        )}
      </p>
      <p>CLICKS = {click}</p>
    </div>
  );
}

export default LikeButton;
