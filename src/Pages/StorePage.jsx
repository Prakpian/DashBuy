import React from "react";
import Card from "../components/Card";

function StorePage() {
  return (
    <div className="flex flex-col md:flex-row max-w-[1200px] m-auto px-3 gap-10 mt-20 place-items-center">
      <div className="max-w-[200px] w-full flex flex-col gap-4">
        <h1 className="font-medium">Filter</h1>
        <hr className="text-neutral-400" />
        <div>
          <h2 className="font-medium">Category</h2>
          <div className="flex gap-3">
            <input type="checkbox" name="clothes" />
            <label htmlFor="clothes" value="Clothes">
              Clothes
            </label>
          </div>
          <div className="flex gap-3">
            <input type="checkbox" name="Accessories" />
            <label htmlFor="Accessories" value="Accessories">
              Accessories
            </label>
          </div>
          <div className="flex gap-3">
            <input type="checkbox" name="Electronics" />
            <label htmlFor="Electronics" value="Electronics">
              Electronics
            </label>
          </div>
        </div>
        <hr className="text-neutral-400" />
        <div>
          <h2 className="font-medium">Price</h2>
          <div className="flex gap-3 cursor-pointer">
            <input type="checkbox" name="price-range" value="0 <= 20" />
            <label htmlFor="0-20">£0-£20</label>
          </div>
          <div className="flex gap-3">
            <input type="checkbox" name="price-range" value="40 <= 60" />
            <label htmlFor="20-60">£20-£60</label>
          </div>
          <div className="flex gap-3">
            <input type="checkbox" name="price-range" value="60-plus" />
            <label htmlFor="60+">£60+</label>
          </div>
        </div>
      </div>
      <div className="flex grow-2 gap-5 flex-wrap place-content-center md:place-content-start">
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default StorePage;
