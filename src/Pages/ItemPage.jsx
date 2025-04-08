import React, { useState } from "react";
import Button from "../components/Button";
import Footer from "../components/Footer";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import ShippingInfo from "../components/ShippingInfo";

function ItemPage() {
  const [quantity, setQuantity] = useState(1);
  const [deliveryMenu, setDeliveryMenu] = useState(false);
  const [returnMenu, setReturnMenu] = useState(false);

  return (
    <div>
      <ShippingInfo />
      <div className="grid max-w-[1200px] m-auto px-3">
        <div className="flex flex-col place-items-center sm:flex-row gap-20 mt-10">
          <img
            src="https://images.unsplash.com/photo-1545127398-14699f92334b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-[300px]"
          />
          <div className="flex flex-col gap-10">
            <div>
              <h1 className="text-2xl font-bold">Beats Headphones</h1>
              <h2 className="text-xl">Electrionics</h2>
            </div>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old
            </p>
            <div>
              <div className="flex mb-10 gap-1">
                <Button
                  btnText={"-"}
                  variant="line"
                  btnClick={() =>
                    quantity !== 1 &&
                    setQuantity((prevQuantity) => prevQuantity - 1)
                  }
                />
                <p className="py-2 px-4 border-2 font-bold">{quantity}</p>
                <Button
                  btnText={"+"}
                  variant="line"
                  btnClick={() =>
                    setQuantity((prevQuantity) => prevQuantity + 1)
                  }
                />
              </div>
              <Button btnText={"ADD TO CART"} />
            </div>
          </div>
        </div>
        <section className="grid gap-5 my-10">
          <div className="grid gap-2 cursor-pointer">
            <div
              className="bg-neutral-100 px-4 py-2 flex justify-between items-center"
              onClick={() => setDeliveryMenu(!deliveryMenu)}
            >
              <p className="font-medium">Delivery</p>
              {deliveryMenu ? (
                <MdOutlineKeyboardArrowUp />
              ) : (
                <MdOutlineKeyboardArrowDown />
              )}
            </div>
            {deliveryMenu && (
              <div>
                <div className="px-4 py-2 p-2">
                  <div className="flex justify-between">
                    <p className="font-bold">Standard UK Delivery</p>
                    <p className="font-bold">£4.99</p>
                  </div>
                  <p>
                    Free delivery for orders over £50. Recieve within 3-5
                    buisness days.
                  </p>
                </div>
                <div className="px-4 py-2 p-2">
                  <div className="flex justify-between">
                    <p className="font-bold">Next Day Delivery</p>
                    <p className="font-bold">£6.99</p>
                  </div>
                  <p>
                    Order by 7PM today to recieve the following buisness day.
                  </p>
                </div>
              </div>
            )}
          </div>
          <div className="grid gap-2 cursor-pointer">
            <div
              className="bg-neutral-100 px-4 py-2 flex justify-between items-center"
              onClick={() => setReturnMenu(!returnMenu)}
            >
              <p className="font-medium">Return</p>
              {returnMenu ? (
                <MdOutlineKeyboardArrowUp />
              ) : (
                <MdOutlineKeyboardArrowDown />
              )}
            </div>
            {returnMenu && (
              <div className="px-4 py-2 p-2">
                <p>
                  To refund your item, return the item within 28 days of the
                  date of purchase. Item can be refunded either instore or
                  through post. For addition details read through the Return
                  Policy.
                </p>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

export default ItemPage;
