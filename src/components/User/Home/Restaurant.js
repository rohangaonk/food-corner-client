import React from "react";

function Restaurant({ restaurant }) {
  return (
    <div className="relative flex-col space-y-2  bg-white drop-shadow-sm p-4 hover:drop-shadow-xl">
      <div className="m-auto">
        {restaurant.isFeatured ? (
          <div className="absolute  bg-primary px-2 py-1 text-font-14 text-white tracking-wide">
            Featured
          </div>
        ) : (
          ""
        )}

        <img
          className=" bg-green-500 w-60 h-44"
          src={`/${restaurant.image}`}
          alt=""
        />
      </div>

      <h1 className="font-semibold text-font-16">{restaurant.name}</h1>
      <p className="text-font-12">{restaurant.cuisines}</p>
      <div className="flex justify-between text-font-12">
        <div>
          <img className="inline mr-1 mb-1" src="/rating.svg" alt="" />
          <span>{restaurant.rating}</span>
        </div>
        <div className="bg-primary max-h-full w-px"></div>
        <div className="text-center ">{restaurant.cost}</div>
        <div className="bg-primary max-h-full w-px"></div>
        <div className=" text-right">{restaurant.maxTime}</div>
      </div>
    </div>
  );
}

export default Restaurant;
