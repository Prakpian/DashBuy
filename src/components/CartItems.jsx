import React, { useState } from "react";
import Button from "../components/Button";
import { useCart } from "../contexts/CartContext";
import { FaTrash } from "react-icons/fa";

function CartItems({ itemDetails }) {
  const { setCart } = useCart();

  const handleAddQuantity = () => {
    setCart((items) =>
      items.map((item) =>
        item.id === itemDetails.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const handleMinusQuantity = () => {
    setCart((prevCart) => {
      if (itemDetails.quantity === 1) {
        return prevCart.filter((item) => item.id !== itemDetails.id);
      }

      return prevCart.map((item) =>
        item.id === itemDetails.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    });
  };

  const handleRemoveItem = () => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.id !== itemDetails.id)
    );
  };

  return (
    <div className="flex flex-col lg:flex-row gap-10 sm:gap-20 mt-10 w-full gap-2">
      <img
        src={itemDetails.image}
        alt={itemDetails.title}
        className="max-w-[150px] h-[150px] object-contain w-full"
      />
      <div className="flex flex-col sm:flex-row w-full justify-between gap-5">
        <div className="flex flex-col gap-3 items-start">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold max-w-[400px]">
              {itemDetails.title}
            </h1>
            <h2 className="sm:text-xl">
              {itemDetails.category.charAt(0).toUpperCase() +
                itemDetails.category.slice(1)}
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-stretch">
            <div className="flex gap-1">
              <Button
                btnText={"-"}
                variant="line"
                btnClick={handleMinusQuantity}
              />
              <p className="py-2 px-4 border-2 font-bold">
                {itemDetails.quantity}
              </p>
              <Button
                btnText={"+"}
                variant="line"
                btnClick={handleAddQuantity}
              />
            </div>
            <Button
              btnText={<FaTrash />}
              variant="primary"
              btnClick={handleRemoveItem}
            />
          </div>
        </div>
        <p className="font-medium">
          £{(itemDetails.price * itemDetails.quantity).toFixed(2)}
        </p>
      </div>
    </div>
  );
}

export default CartItems;
