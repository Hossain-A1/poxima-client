import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";

const Navbar = () => {
  const { user } = useAuthContext();
 const {logout} = useLogout()

  const haldleLogout = ()=>{
    logout()
  }

  return (
    <div className="navber container mx-auto h-20 flex items-center justify-between border-b border-teal-950">
      <Link to="/" className="logo text-3xl font-medium text-teal-600">
        Closer{" "}
      </Link>

      <nav className="">
        {!user && (
          <div className="space-x-5">
            <Link to="/login" className="hover:text-teal-500 duration-300">
              Login
            </Link>
            <Link to="/signup" className="hover:text-teal-500 duration-300">
              Signup
            </Link>
          </div>
        )}
        {user && <div className=" flex justify-center gap-5 items-center">
          <span className="max-md:hidden">{user.email}</span>
          <button
          onClick={haldleLogout}
        type="submit"
        className="bg-rose-500 text-gray-50 py-2 px-5 rounded-lg hover:bg-rose-600 duration-300"
      >
      Logout
      </button>
          </div>}
      </nav>
    </div>
  );
};

export default Navbar;
