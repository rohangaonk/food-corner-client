import React from "react";

function Signin({ close, setSignInVisible }) {
  return (
    <div className="h-screen">
      <div className="py-6 px-8">
        <button className="text-primary" onClick={close}>
          <strong>X</strong>
        </button>
      </div>
      <div className="bg-secondary py-4 px-8 ">
        <h1 className="font-medium text-font-20">Sign In</h1>
        <button
          onClick={() => setSignInVisible(false)}
          className="text-font-12 text-primary cursor-pointer"
        >
          Create Account
        </button>
        <div className="flex flex-col my-8 space-y-8">
          <input type="text" placeholder="Email" className="input-text" />
          <input type="text" placeholder="Password" className="input-text" />
        </div>
        <button className="block text-font-12 text-primary cursor-pointer">
          Forgot Password
        </button>
        <button className="text-font-14 px-4 py-1 mt-2 text-white bg-primary">
          Signin
        </button>
      </div>
    </div>
  );
}

export default Signin;
