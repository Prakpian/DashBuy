import React from "react";
import Button from "./Button";

function Card({ cardClass }) {
  return (
    <div
      className={`flex flex-col gap-2 w-[150px] sm:w-[180px] flex-none ${cardClass}`}
    >
      <img
        src="https://images.unsplash.com/photo-1545127398-14699f92334b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="h-[180px] w-[180px] object-cover bg-black"
      />
      <div>
        <h3 className="font-medium">Beats Headphone</h3>
        <p className="font-light text-neutral-500">Electronics</p>
      </div>
      <p className="my-2">£119.99</p>
      <Button btnText={"Add to cart"} variant="line" />
    </div>
  );
}

export default Card;
