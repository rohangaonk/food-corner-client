import React, { useState } from "react";
import { Link } from "react-router-dom";
import Signin from "./Home/Signin";
import Signup from "./Home/Signup";

function Navbar() {
  const [isVisible, setIsVisbile] = useState(false);
  const [signinVisible, setSignInVisible] = useState(true);
  const closeSidebar = () => {
    setIsVisbile(false);
    setSignInVisible(true);
  };

  return (
    <div className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="mx-16 ">
        <div className="flex py-4 ">
          <div className="w-3/12 text-primary text-font-20 font-semibold cursor-pointer ">
            <Link to="/">
              <img className="inline align-baseline" src="logo.svg" alt="" />
              <span>oodCorner</span>
            </Link>
          </div>
          <div className=" w-6/12 flex items-center text-font-14">
            <span>Deliver to:</span>
            <img className="inline " src="location.svg" alt="" />
            <span> Panaji, patto center 403401</span>
          </div>
          <div className="w-3/12 flex justify-between items-center space-x-2 text-font-14">
            <a href="#" className="nav-action">
              <span>Search</span>
            </a>
            <a
              href="#"
              className="nav-action "
              onClick={() => setIsVisbile(true)}
            >
              <span>Signin</span>
            </a>
            <a href="#" className="nav-action relative">
              <span>Cart</span>
              <div className="text-font-12 font-medium text-center absolute bg-primary rounded-full h-5 w-5  text-white top-0 left-3/4">
                10
              </div>
            </a>
          </div>
        </div>
      </nav>
      <div
        className={`h-screen w-full fixed top-0  bg-gray-400  ease-out origin-top duration-200  ${
          isVisible
            ? "translate-y-0 bg-opacity-40"
            : "-translate-y-full bg-opacity-0"
        }`}
      >
        <div className="w-1/3 bg-white absolute right-0">
          {signinVisible ? (
            <Signin close={closeSidebar} setSignInVisible={setSignInVisible} />
          ) : (
            <Signup close={closeSidebar} setSignInVisible={setSignInVisible} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
