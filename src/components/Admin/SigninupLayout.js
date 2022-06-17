import React from "react";
import Navbar from "./Navbar";

function SigninupLayout({ signinup }) {
  return (
    <div>
      <Navbar />
      <div className="flex justify-around mx-16">
        <img
          className="h-[540px] object-contain"
          src="/rest_signup_image.jpg"
          alt=""
        />
        <div className="flex items-center mt-2">
          <div className="py-6 px-8 flex flex-col justify-center bg-secondary w-96  min-h-[320px]">
            {signinup}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SigninupLayout;
