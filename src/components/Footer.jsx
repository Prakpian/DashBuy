import React from "react";
import { AiFillTikTok } from "react-icons/ai";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <section className="grid place-items-center gap-10 mb-20 mt-30">
      <div className="grid gap-3 p-5 bg-neutral-200 w-full">
        <h1 className="text-xl font-medium text-center">Follow us</h1>
        <div className="flex gap-5 place-content-center">
          <FaInstagramSquare size={30} className="hover:cursor-pointer" />
          <FaFacebookSquare size={30} className="hover:cursor-pointer" />
          <FaSquareXTwitter size={30} className="hover:cursor-pointer" />
          <AiFillTikTok size={30} className="hover:cursor-pointer" />
        </div>
      </div>
      <div className="flex gap-5 px-2">
        <div>
          <h3 className="font-medium text-xl mb-2">Help infomation</h3>
          <ul className="grid gap-2">
            <li className="hover:underline hover:cursor-pointer">FAQs</li>
            <li className="hover:underline hover:cursor-pointer">Contact us</li>
            <li className="hover:underline hover:cursor-pointer">Account</li>
            <li className="hover:underline hover:cursor-pointer">
              Store finder
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-medium text-xl mb-2">Delivery & returns</h3>
          <ul className="grid gap-2">
            <li className="hover:underline hover:cursor-pointer">
              Delivery & collection
            </li>
            <li className="hover:underline hover:cursor-pointer">
              Return & refunds
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-medium text-xl mb-2">About DashBuy</h3>
          <ul className="grid gap-2">
            <li className="hover:underline hover:cursor-pointer">About us</li>
            <li className="hover:underline hover:cursor-pointer">
              How we do it
            </li>
            <li className="hover:underline hover:cursor-pointer">Careers</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Footer;
