import React from "react";

const Star = ({ starId, marked }) => {
  return (
    <span
      star-id={starId}
      role="button"
      style={{ color: "#F9BF00", cursor: "pointer", fontSize: "22px" }}
    >
      {marked ? "\u2605" : "\u2606"}
    </span>
  );
};

// Create an array of 5: Array.from({length: 5}, (v,i) => i)
const StarRating = ({callback}) => {
  // Manages on Hover selection of a star
  const [selection, setSelection] = React.useState(0);

  // Manages rating selection
  const [rating, setRating] = React.useState(0);

  const hoverOver = event => {
    let starId = 0;
    if (event && event.target && event.target.getAttribute("star-id")) {
      starId = event.target.getAttribute("star-id");
    }
    setSelection(starId);
  };
  const handleClickStar = (event) => {
    setRating(event.target.getAttribute("star-id"));
    callback(event.target.getAttribute("star-id"));
  }
  return (
    <div
      onMouseOver={hoverOver}
      onMouseOut={() => hoverOver(null)}
      onClick={(event) => handleClickStar(event)}
    >
      {Array.from({ length: 5 }, (v, i) => (
        <Star starId={i + 1} marked={selection ? selection > i : rating > i} />
      ))}
    </div>
  );
};

export default StarRating;