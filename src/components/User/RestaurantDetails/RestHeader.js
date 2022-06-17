import React from "react";
import RestStatus from "../RestStatus";

function RestHeader() {
  return (
    <div className="bg-secondary">
      <div className="mx-16 flex h-36">
        <img className="w-72 h-52" src="/rest1.jpg" alt="" />
        <div className=" flex flex-col justify-center mx-16">
          <h1 className="font-semibold text-font-30 text-primary ">
            Flora Kitchen
          </h1>
          <h2 className="text-font-14 mt-4">
            <img className="inline" src="/location.svg" alt="" />{" "}
            <span>Patto plaza, 403402</span>
          </h2>
          <h2 className="text-font-14">
            <img className="inline p-1" src="/phone.svg" alt="" />
            <span>9764262354</span>
          </h2>
        </div>
        <div className=" mx-32 flex items-center">
          <RestStatus />
        </div>
      </div>
    </div>
  );
}

export default RestHeader;
