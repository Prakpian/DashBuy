import React from "react";
import Button from "../components/Button";

function CartPage() {
  return (
    <div className="flex flex-col-reverse sm:flex-row my-20 mx-10 max-w-[1000x] place-content-center gap-10">
      <div className="max-w-[800px] w-full border-2 p-10 sm:px-15">
        <h2 className="text-2xl font-medium">Shopping Basket</h2>
        <div className="flex flex-col md:flex-row gap-10 sm:gap-20 mt-10 w-full gap-2">
          <img
            src="https://images.unsplash.com/photo-1545127398-14699f92334b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-[150px]"
          />
          <div className="flex flex-col sm:flex-row w-full justify-between gap-5">
            <div className="flex flex-col gap-3 items-start">
              <div>
                <h1 className="text-xl sm:text-2xl font-bold">
                  Beats Headphones
                </h1>
                <h2 className="sm:text-xl">Electrionics</h2>
              </div>
              <div>
                <div className="flex gap-1">
                  <Button btnText={"-"} variant="line" />
                  <p className="py-2 px-4 border-2 font-bold">1</p>
                  <Button btnText={"+"} variant="line" />
                </div>
              </div>
              <Button btnText={"Remove"} variant="line" />
            </div>
            <p className="font-medium">12.99</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 p-4 border-2 h-fit">
        <h2 className="text-xl font-medium">Total (1): £12.99</h2>
        <Button btnText={"Checkout"} />
      </div>
    </div>
  );
}

export default CartPage;
