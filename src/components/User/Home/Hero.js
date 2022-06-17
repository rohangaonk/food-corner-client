import React from "react";

function Hero() {
  return (
    <div className="flex pt-12 pb-28 bg-secondary ">
      <div className="w-5/12 mx-16 flex-col space-y-4 ">
        <div className="text-primary font-semibold text-font-36">
          Favourite Restaurants at your doorstep
        </div>
        <div className="text-font-14">
          within few clicks choose the food that is accessible to you. we
          <br />
          promise to deliver within 15 minutes
        </div>
        <div className="flex justify-between space-x-2">
          <input
            className="w-full input-text"
            id="inline-full-name"
            type="text"
            placeholder="Enter your address"
          />
          <button className="w-32 bg-primary rounded px-4 text-font-12 text-white">
            Find food
          </button>
        </div>
      </div>
      <div className="w-2/12"></div>
      <div className="w-5/12">
        <div>
          <img className="object-contain h-72" src="hero_image.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
