import React from "react";
import { RiAccountCircle2Line, RiShoppingCartLine } from "react-icons/ri";

function Navbar() {
  return (
    <nav className="flex flex-col w-full items-center sticky top-0 bg-white">
      <section className="flex justify-between max-w-[1200px] w-full p-3">
        <p className="font-bold text-2xl bg-red-600 text-white p-2">DashBuy</p>
        <div className="flex gap-5 items-center">
          <div className="flex gap-1 hover:bg-neutral-100 p-2 rounded-full">
            <RiAccountCircle2Line size={"25"} />
            <p className="font-medium">Account</p>
          </div>
          <div className="flex hover:bg-neutral-100 p-2 rounded-full">
            <RiShoppingCartLine size={"25"} />
            <p className="rounded-full bg-red-600 min-w-4 max-h-4 p-[1px] w-fit text-white text-center text-[10px] font-bold">
              1
            </p>
          </div>
        </div>
      </section>
      <section className="w-full flex gap-4 place-content-center py-2 border-y">
        <p className="hover:underline underline-offset-4 decoration-2 font-medium">
          Shop
        </p>
        <p className="hover:underline underline-offset-4 decoration-2 font-medium">
          Clothes
        </p>
        <p className="hover:underline underline-offset-4 decoration-2 font-medium">
          Accessories
        </p>
        <p className="hover:underline underline-offset-4 decoration-2 font-medium">
          Electronics
        </p>
      </section>
    </nav>
  );
}

export default Navbar;
