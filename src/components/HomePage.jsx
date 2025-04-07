import React from "react";
import ShippingInfo from "./ShippingInfo";
import Button from "./Button";

function HomePage() {
  return (
    <div>
      <ShippingInfo />
      <div className="bg-[url('assets/boxed-water-is-better-7H1hDt694s8-unsplash.jpg')] bg-cover bg-center h-[450px] md:h-[600px] place-content-end place-items-center">
        <div className="grid place-items-center gap-2 my-5">
          <p className="text-white text-2xl font-bold bg-black/50 p-2">
            Best value price
          </p>
          <Button btnText="Shop now" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
