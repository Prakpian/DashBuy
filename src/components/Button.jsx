import React from "react";

function Button({ variant = "primary", btnText }) {
  const baseClass = "py-2 px-4 hover:brightness-95 active:scale-95";
  const variants = { primary: "bg-red-600 text-white" };
  return (
    <button className={`${baseClass} ${variants[variant]}`}>{btnText}</button>
  );
}

export default Button;
