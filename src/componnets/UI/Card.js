import React from "react";
import "./Card.css";

const Card = (props) => {
  const className = "cards " + props.className;

  return <div className={className}>{props.children}</div>;
};

export default Card;
