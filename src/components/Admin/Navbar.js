import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const loggedIn = false;

  return (
    <div className="sticky top-0 z-10 bg-white shadow-md">
      <nav className="mx-16 ">
        <div className="flex py-4 ">
          <div className="w-3/12 text-primary text-font-20 font-semibold cursor-pointer ">
            <Link to="/">
              <img className="inline align-baseline" src="/logo.svg" alt="" />
              <span>oodCorner</span>
            </Link>
          </div>
          <div className=" w-5/12 flex items-center space-x-8 text-font-14">
            {loggedIn ? (
              <>
                <div className="text-font-14">
                  <img className="inline p-1" src="/phone.svg" alt="" />
                  <span>9764262354</span>
                </div>
                <div className="text-font-14">
                  <img className="inline p-1" src="/email.svg" alt="" />
                  <span>gaonkar70@gmail.com</span>
                </div>
              </>
            ) : (
              ""
            )}
          </div>
          <div className="w-4/12 flex justify-between items-center space-x-2 text-font-14">
            <a href="#" className="nav-action">
              <span>Earnings</span>
            </a>
            <a href="#" className="nav-action">
              <span>Orders</span>
            </a>
            <a href="#" className="nav-action">
              <span>Kitchen</span>
            </a>
            <a href="#" className="nav-action">
              <span>Account</span>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
