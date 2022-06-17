import React from "react";

function Food({ food }) {
  return (
    <div className="flex p-1 drop-shadow-md bg-white">
      <div className="min-w-fit relative">
        <img className="w-44 h-32" src={`/${food.image}`} alt="" />
        <button className="absolute w-7/12 bottom-1 mx-auto left-0 right-0  bg-white py-1 text-primary text-font-14 font-medium">
          Add to cart
        </button>
      </div>
      <div className="p-2">
        <div className="flex w-full justify-between">
          <span className="font-medium flex items-center">
            <img className="inline pr-1" src="/veg.svg" alt="" />
            <span>{food.name}</span>
          </span>
          <div className="flex items-center">
            <img className="inline p-1" src="/rupee.svg" alt="" />
            <span className="font-medium">{food.price}</span>
          </div>
        </div>
        <div className="text-font-12 font-light mt-4">{food.desc}</div>
        {food.isCustomizable ? (
          <button className="px-1 text-font-12 font-light mt-2 border-b-2 border-primary">
            customize
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Food;
