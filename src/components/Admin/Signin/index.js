import React from "react";

import SigninupLayout from "../SigninupLayout";
import Signin from "./Signin";

function index() {
  return <SigninupLayout signinup={<Signin />} />;
}

export default index;
