import React from "react";

import SigninupLayout from "../SigninupLayout";
import Signup from "./Signup";

function index() {
  return <SigninupLayout signinup={<Signup />} />;
}

export default index;
