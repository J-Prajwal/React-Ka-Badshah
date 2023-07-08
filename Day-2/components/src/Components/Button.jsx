import React from "react";

const Button = ({ title = "ButtonTitle", onClickHandler, currentValue }) => {
  return (
    <button
      disabled={currentValue === 0 && title === "-" ? true : false}
      onClick={onClickHandler}
    >
      {title}
    </button>
  );
};

export default Button;
