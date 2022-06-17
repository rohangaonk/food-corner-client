import React from "react";
import Navbar from "../Navbar";
import RestBody from "./RestBody";
import RestHeader from "./RestHeader";

function RestDetails() {
  return (
    <React.Fragment>
      <Navbar />
      <RestHeader />
      <RestBody />
    </React.Fragment>
  );
}

export default RestDetails;
