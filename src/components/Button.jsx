import React from "react";

function Button({ variant = "primary", btnText }) {
  const baseClass = "py-2 px-4";
  const variants = { primary: "bg-red-600 text-white" };
  return (
    <button className={`${baseClass} ${variants[variant]}`}>{btnText}</button>
  );
}

export default Button;
