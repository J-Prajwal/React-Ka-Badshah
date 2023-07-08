import React from "react";

const Header = ({ title, variant }) => {
  if (variant === "large") return <h1>{title}</h1>;
  else if (variant === "medium") return <h2>{title}</h2>;
  else return <h3>{title}</h3>;
};

export default Header;
