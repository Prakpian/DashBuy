import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import { useCart } from "../contexts/CartContext";
import CartItems from "../components/CartItems";

function CartPage() {
  const { cart } = useCart();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const sumPrice = () => {
      let sum = 0;
      cart.forEach((item) => {
        sum += item.price * item.quantity;
      });
      return sum;
    };
    setTotalPrice(sumPrice);
  }, [cart]);

  return (
    <div className="flex flex-col-reverse sm:flex-row my-20 mx-10 max-w-[1000x] place-content-center gap-10">
      <div className="max-w-[800px] w-full border-2 p-10 sm:px-15">
        <h2 className="text-2xl font-medium">Shopping Basket</h2>
        {cart.length === 0 ? (
          <p className="mt-10">Your basket is currently empty...</p>
        ) : (
          cart.map((item) => <CartItems itemDetails={item} key={item.id} />)
        )}
      </div>
      <div className="flex flex-col gap-3 p-4 border-2 h-fit md:max-w-[200px] md:w-full">
        <h2 className="text-xl font-medium">
          Total ({cart.length}): £{totalPrice.toFixed(2)}
        </h2>
        <Button btnText={"Checkout"} />
      </div>
    </div>
  );
}

export default CartPage;
