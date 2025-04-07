import React from "react";

function ShippingInfo() {
  return (
    <section className="flex gap-5 py-2 w-full bg-neutral-100 place-content-center ">
      <p>Free Shipping over £50</p>
      <p className="hidden sm:block">|</p>
      <p className="hidden sm:block">
        Order by 7pm Next Day Delivery (Mon - Fri)
      </p>
    </section>
  );
}

export default ShippingInfo;
