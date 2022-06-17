import React from "react";

function Signup() {
  return (
    <>
      <h1 className="font-medium text-font-18 ">Sign In</h1>
      <span className="text-primary text-font-12 cursor-pointer">
        Create account
      </span>
      <div className="flex flex-col my-4 space-y-6">
        <input type="text" placeholder="Email" className="input-text-admin" />
        <input
          type="text"
          placeholder="Password"
          className="input-text-admin"
        />
      </div>
      <span className="text-primary text-font-12 cursor-pointer">
        Forgot password
      </span>
      <button className="text-font-14 px-4 py-1 mt-2 w-full text-white bg-primary">
        Signin
      </button>
    </>
  );
}

export default Signup;
