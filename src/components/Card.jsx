import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

function Card({ itemDetails }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/shop/${itemDetails.category}/${itemDetails.id}`, {
      state: { product: itemDetails },
    });
  };

  return (
    <div
      className="flex flex-col gap-2 w-[150px] sm:w-[180px] flex-none"
      key={itemDetails.id}
      onClick={handleCardClick}
    >
      <img
        src={itemDetails.image}
        alt={itemDetails.title}
        className="h-[180px] w-[180px] object-contain "
      />
      <div>
        <h3 className="font-medium truncate">{itemDetails.title}</h3>
        <h2 className="font-light text-neutral-500">
          {itemDetails.category.charAt(0).toUpperCase() +
            itemDetails.category.slice(1)}
        </h2>
      </div>
      <p className="my-2">£{itemDetails.price}</p>
      <Button btnText={"Add to cart"} variant="line" />
    </div>
  );
}

export default Card;
