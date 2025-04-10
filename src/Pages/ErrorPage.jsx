import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Logo from "../components/Logo";

function ErrorPage() {
  return (
    <div className="h-screen flex flex-col place-content-center place-items-center gap-5">
      <Logo />
      <div className="place-items-center">
        <h1 className="text-3xl font-medium">Oh no! Something went wrong!</h1>
        <p>The page you are looking for can not be found.</p>
      </div>
      <Link to="/">
        <Button btnText={"Return home"} />
      </Link>
    </div>
  );
}

export default ErrorPage;
