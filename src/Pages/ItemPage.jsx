import React, { useState } from "react";
import { useLocation, useOutletContext, useParams } from "react-router-dom";
import Button from "../components/Button";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { useCart } from "../contexts/CartContext";
import { useProductFilters } from "../hooks/useFilterProducts";

function ItemPage() {
  const { state } = useLocation();
  const product = state?.product;
  const [itemQuantity, setItemQuantity] = useState(1);
  const [deliveryMenu, setDeliveryMenu] = useState(false);
  const [returnMenu, setReturnMenu] = useState(false);
  const { setCart } = useCart();
  const { data } = useOutletContext();
  const { displayData } = useProductFilters(data);
  const { id } = useParams();

  const handleAddCartClick = () => {
    const itemData = displayData.find((item) => item.id === Number(id));

    setCart((items) => {
      if (items.find((item) => item.id === itemData.id)) {
        return items.map((item) =>
          item.id === itemData.id
            ? { ...item, quantity: item.quantity + itemQuantity }
            : item
        );
      }
      return [...items, { ...itemData, quantity: itemQuantity }];
    });
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <div className="grid max-w-[1200px] m-auto px-3">
        <div className="flex flex-col place-items-center sm:flex-row gap-20 mt-10">
          <img src={product.image} alt={product.title} className="w-[300px]" />
          <div className="flex flex-col gap-10">
            <div>
              <h1 className="text-2xl font-bold">{product.title}</h1>
              <h2 className="text-xl">
                {product.category.charAt(0).toUpperCase() +
                  product.category.slice(1)}
              </h2>
            </div>
            <p>{product.description}</p>
            <div>
              <div className="flex mb-10 gap-1">
                <Button
                  btnText={"-"}
                  variant="line"
                  btnClick={() =>
                    quantity !== 1 &&
                    setItemQuantity((prevQuantity) => prevQuantity - 1)
                  }
                />
                <p className="py-2 px-4 border-2 font-bold">{itemQuantity}</p>
                <Button
                  btnText={"+"}
                  variant="line"
                  btnClick={() =>
                    setItemQuantity((prevQuantity) => prevQuantity + 1)
                  }
                />
              </div>
              <Button btnText={"ADD TO CART"} btnClick={handleAddCartClick} />
            </div>
          </div>
        </div>
        <section className="grid gap-5 my-10">
          <div className="grid gap-2">
            <div
              className="bg-neutral-100 px-4 py-2 flex justify-between items-center cursor-pointer"
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
          <div className="grid gap-2">
            <div
              className="bg-neutral-100 px-4 py-2 flex justify-between items-center cursor-pointer"
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
