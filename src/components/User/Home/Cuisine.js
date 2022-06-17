import React from "react";

const Cuisine = ({ cuisine }) => (
  <div className="bg-white min-w-fit relative rounded">
    <div className="absolute rounded-tl bg-primary px-4 py-1 text-font-14 text-white tracking-wide">
      {cuisine.banner}
    </div>
    <img className="p-4 " src={`/${cuisine.image}`} alt="" />
  </div>
);

export default Cuisine;
