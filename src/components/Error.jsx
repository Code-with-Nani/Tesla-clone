import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="h-screen w-screen bg-red-950 flex flex-col justify-center items-center medium text-white">
      <h4 className="book text-[47px]">404</h4>
      <p className="book text-[27px]">Page Not Found</p>
      <span>
        Go Back To{" "}
        <Link to="/">
          <button className="border-b-2 border-white">Home</button>
        </Link>
      </span>
    </div>
  );
};

export default Error;
