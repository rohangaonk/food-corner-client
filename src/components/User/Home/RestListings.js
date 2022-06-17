import React from "react";
import Restaurants from "./Restaurants";

function RestListings() {
  return (
    <div className="mx-16 mt-12">
      <div className="flex sticky top-16 z-30 pt-4 bg-white">
        <div className="w-4/12 text-font-20">142 Restaurants</div>
        <div className=" flex justify-between w-8/12 p-2 ">
          <div className="px-4 border-b-2 border-white  hover:border-primary">
            Ratings
          </div>
          <div className="px-4 border-b-2 border-white  hover:border-primary">
            Delivery Time
          </div>
          <div className="px-4 border-b-2 border-white  hover:border-primary">
            Price L-H
          </div>
          <div className="px-4 border-b-2 border-white  hover:border-primary">
            Price H-L
          </div>
          <div>
            <img className="inline" src="/sort.svg" alt="" />
            <span>Sort</span>
          </div>
        </div>
      </div>
      <hr />
      <Restaurants />
    </div>
  );
}

export default RestListings;
