import React from "react";

function Signup() {
  return (
    <>
      <h1 className="font-medium text-font-18">Create Account</h1>
      <span className="text-font-12 text-primary cursor-pointer">
        Already have an account, Signin
      </span>
      <div className="flex flex-col my-4 space-y-8">
        <input
          type="text"
          placeholder="Your name"
          className="input-text-admin"
        />
        <input
          type="text"
          placeholder="Restaurant name"
          className="input-text-admin"
        />
        <input type="text" placeholder="Email" className="input-text-admin" />
        <input type="text" placeholder="Phone" className="input-text-admin" />
        <input
          type="text"
          placeholder="Password"
          className="input-text-admin"
        />
        <input
          type="text"
          placeholder="Confirm password"
          className="input-text-admin"
        />
      </div>

      <button className="text-font-14 px-4 py-1 mt-2 w-full text-white bg-primary">
        Request Registration
      </button>
    </>
  );
}

export default Signup;
