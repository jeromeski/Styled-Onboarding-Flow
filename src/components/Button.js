import React, { Fragment } from "react";

const Button = (props) => {
  console.log("button", props);
  const { className, onClick, children, disabled } = props;
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
