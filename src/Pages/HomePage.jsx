import React from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import { Link, useOutletContext } from "react-router-dom";

function HomePage() {
  const { data, loading = false } = useOutletContext();
  if (loading) return <div className="text-center mt-20">Loading...</div>;

  return (
    <div>
      <div className="grid gap-20">
        <Link to={"/shop"}>
          <div
            className="bg-[url('https://images.unsplash.com/photo-1553531889-56cc480ac5cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]
       bg-cover bg-center h-[450px] md:h-[600px] place-content-end place-items-center"
          >
            <div className="grid place-items-center gap-2 my-5">
              <p className="text-white text-2xl font-bold bg-black/50 p-2">
                Best Quality, Best Value
              </p>
              <Button btnText={"Shop now"} />
            </div>
          </div>
        </Link>
        <div className="place-content-center max-w-[1240px] m-auto grid gap-20">
          <section className="grid gap-10 place-items-center">
            <h1 className="text-2xl font-medium">Bestseller Categories</h1>
            <div className="flex flex-wrap gap-5 place-content-center">
              <Link to={"/shop?category=clothes"}>
                <div
                  className="bg-[url('https://plus.unsplash.com/premium_photo-1675186049222-0b5018db6ce9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]
         bg-cover bg-center h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] place-content-end pl-5 pb-5 hover:brightness-95"
                >
                  <p className="text-2xl text-white font-bold bg-black/25 w-fit p-2">
                    Clothes
                  </p>
                  <Button btnText={"Shop"} />
                </div>
              </Link>
              <Link to={"/shop?category=jewelery"}>
                <div
                  className="bg-[url('https://plus.unsplash.com/premium_photo-1681276169450-4504a2442173?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]
         bg-cover bg-center h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] place-content-end pl-5 pb-5 hover:brightness-95"
                >
                  <p className="text-2xl text-white font-bold bg-black/25 w-fit p-2">
                    Jewelery
                  </p>
                  <Button btnText={"Shop"} />
                </div>
              </Link>
              <Link to={"/shop?category=electronics"}>
                <div
                  className="bg-[url('https://images.unsplash.com/photo-1594731804139-d70328c07f4a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGdhZGdldHN8ZW58MHx8MHx8fDA%3D')]
         bg-cover bg-center h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] place-content-end pl-5 pb-5 hover:brightness-95"
                >
                  <p className="text-2xl text-white font-bold bg-black/25 w-fit p-2">
                    Electronics
                  </p>
                  <Button btnText={"Shop"} />
                </div>
              </Link>
            </div>
          </section>
          <Link to={"/shop"}>
            <div className="flex justify-between items-center bg-red-600 py-8 px-5 sm:px-15">
              <div>
                <h1 className="text-3xl sm:text-4xl text-white font-bold ">
                  CLEARANCE
                </h1>
                <h2 className="sm:text-xl text-yellow-300 font-bold">
                  EVEN MORE VALUE
                </h2>
              </div>
              <h2 className="text-sm sm:text-xl text-white underline underline-offset-3">
                SHOP NOW
              </h2>
            </div>
          </Link>
          <section className="grid gap-10 place-items-center">
            <h1 className="text-2xl font-medium">Today's Best Deal</h1>
            <div className="w-full flex flex-wrap overflow-hidden max-h-[336px] gap-10 justify-center">
              {data.map((item, index) => {
                if (index >= 5) {
                  return;
                }
                return <Card itemDetails={item} key={item.id} />;
              })}
            </div>
            <Link to={"/shop"}>
              <Button btnText={"View more"} />
            </Link>
          </section>
          <section className="grid gap-10 place-items-center">
            <h1 className="text-2xl font-medium">Find Your Nearest Store</h1>
            <form action="#">
              <input
                type="text"
                placeholder="Town or postcode"
                name="location"
                className="p-2 border mr-2"
              />
              <Button btnText={"Find"} />
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
