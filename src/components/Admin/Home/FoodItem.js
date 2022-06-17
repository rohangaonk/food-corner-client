import React from "react";

function FoodItem({ food }) {
  return (
    <div className="bg-lightbg drop-shadow-sm  hover:drop-shadow-md p-2 text-font-14">
      <img className="w-44 h-32" src={`/${food}`} alt="" />

      <p className="text-font-14">Aloo Paratha </p>
      <div className="flex justify-between">
        <span className="_price">
          <img className="h-3 w-3 inline mr-1" src="/rupee.svg" alt="" />
          <span>180</span>
        </span>
        <img src="/veg.svg" alt="" />
      </div>
    </div>
  );
}

export default FoodItem;
