import React from "react";

function Signup({ close, setSignInVisible }) {
  return (
    <div className="h-screen">
      <div className="py-6 px-8">
        <button className="text-primary" onClick={close}>
          <strong>X</strong>
        </button>
      </div>
      <div className="bg-secondary py-4 px-8 ">
        <h1 className="font-medium text-font-20">Sign Up</h1>
        <button
          onClick={() => setSignInVisible(true)}
          className="text-font-12 text-primary cursor-pointer"
        >
          Already signed up. Login
        </button>
        <div className="flex flex-col my-8 space-y-8">
          <input type="text" placeholder="name" className="input-text" />
          <input type="text" placeholder="Email" className="input-text" />
          <input type="text" placeholder="Password" className="input-text" />
        </div>
        <button className="text-font-14 px-4 py-1 mt-2 text-white bg-primary">
          Signup
        </button>
      </div>
    </div>
  );
}

export default Signup;
