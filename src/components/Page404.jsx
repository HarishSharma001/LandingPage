import React from "react";
import pagenotfound from "../assets/pagenotfound.jpg";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div className="text-center">
      <h1 className="h3 mt-2 text-center bg-danger p-3 text-white">
        {" "}
        Page is not found
      </h1>
      <img className="img-fluid " src={pagenotfound} />
      <br />
      <Link className="btn link" to="/">
        Go Back to HomePage
      </Link>
    </div>
  );
};

export default Page404;
