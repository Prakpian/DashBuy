import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

function Card({ itemDetails }) {
  const { setCart } = useCart();
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/shop/${itemDetails.category}/${itemDetails.id}`, {
      state: { product: itemDetails },
    });
  };

  const handleAddCartClick = () => {
    setCart((items) => {
      if (items.find((item) => item.id === itemDetails.id)) {
        return items.map((item) =>
          item.id === itemDetails.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...items, { ...itemDetails, quantity: 1 }];
    });
  };

  return (
    <div
      className="flex flex-col gap-2 w-[150px] sm:w-[180px] flex-none"
      key={itemDetails.id}
    >
      <div onClick={handleCardClick}>
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
        <p className="my-2">£{itemDetails.price.toFixed(2)}</p>
      </div>
      <Button
        btnText={"Add to cart"}
        variant="line"
        btnClick={handleAddCartClick}
      />
    </div>
  );
}

export default Card;
