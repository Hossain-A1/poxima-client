import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navber container mx-auto h-20 flex items-center justify-between border-b border-teal-950">
      <Link to="/" className="logo text-3xl font-medium text-teal-600">
        Proxima{" "}
      </Link>

      <nav className="flex gap-5">
        <Link to="/login" className="hover:text-teal-500 duration-300">
          Login
        </Link>
        <Link to="/signup" className="hover:text-teal-500 duration-300">
          Signup
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
