import React from "react";

function Button({ variant = "primary", btnText, btnClick }) {
  const baseClass =
    "py-2 px-4 hover:brightness-95 active:scale-95 cursor-pointer";
  const variants = {
    primary: "bg-red-600 text-white",
    line: "bg-white border border-2",
  };
  return (
    <button className={`${baseClass} ${variants[variant]}`} onClick={btnClick}>
      {btnText}
    </button>
  );
}

export default Button;
