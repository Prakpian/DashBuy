import React from "react";
import { RiAccountCircle2Line, RiShoppingCartLine } from "react-icons/ri";
import Logo from "./Logo";
import { Link } from "react-router-dom";

function Navbar({ cartCount }) {
  return (
    <nav className="flex flex-col w-full items-center sticky top-0 z-10 bg-white">
      <section className="flex justify-between max-w-[1200px] w-full p-3">
        <Link to={"/"} aria-label="Home">
          <Logo />
        </Link>
        <div className="flex gap-2 sm:gap-5 items-center">
          <div className="flex gap-1 hover:bg-neutral-100 p-2 rounded-full">
            <RiAccountCircle2Line size={"25"} />
            <p className="font-medium">Account</p>
          </div>
          <Link
            to={"/cart"}
            aria-label={`Shopping Cart with ${cartCount} items`}
          >
            <div className="flex hover:bg-neutral-100 p-2 rounded-full">
              <RiShoppingCartLine size={"25"} />
              <p className="rounded-full bg-red-600 min-w-4 max-h-4 p-[1px] w-fit text-white text-center text-[10px] font-bold">
                {cartCount}
              </p>
            </div>
          </Link>
        </div>
      </section>
      <section className="w-full flex gap-2 sm:gap-4 place-content-center py-2 border-y">
        <Link to={"/shop"}>
          <p className="hover:underline underline-offset-4 decoration-2 font-medium">
            Shop
          </p>
        </Link>
        <Link to={"/shop?category=clothes"}>
          <p className="hover:underline underline-offset-4 decoration-2 font-medium">
            Clothes
          </p>
        </Link>
        <Link to={"/shop?category=jewelery"}>
          <p className="hover:underline underline-offset-4 decoration-2 font-medium">
            Jewelery
          </p>
        </Link>
        <Link to={"/shop?category=electronics"}>
          <p className="hover:underline underline-offset-4 decoration-2 font-medium">
            Electronics
          </p>
        </Link>
      </section>
    </nav>
  );
}

export default Navbar;
