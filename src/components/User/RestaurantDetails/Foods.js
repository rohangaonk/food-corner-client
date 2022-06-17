import React from "react";
import categories from "../../../mockData/categories.json";
import foods from "../../../mockData/foods.json";
import Food from "./Food";
import MyCarousel from "../MyCarousel";
import Toggle from "../Toggle";

function RestFoods() {
  return (
    <div className="w-1/2">
      <div className="pb-4 flex sticky top-16 px-1 z-40 py-4 bg-white">
        <div className="w-3/4 text-font-14 ">
          <MyCarousel
            buttonLeft={<img className="h-8" src="/left_arrow.svg" alt="" />}
            buttonRight={<img className="h-8" src="/right_arrow.svg" alt="" />}
            gapInpx={16}
          >
            {categories.map((category, i) => (
              <div
                className="whitespace-nowrap px-1 border-b-2 border-white cursor-pointer active:border-primary hover:text-primary"
                key={category.id}
              >
                {category.name}
              </div>
            ))}
          </MyCarousel>
        </div>
        <div className="w-1/4 flex justify-end space-x-2 items-center ">
          <img src="/veg.svg" alt="" />
          <span className="text-font-14">Veg</span>
          <Toggle active={true} />
        </div>
      </div>
      <div className="flex-col space-y-4">
        {foods.map((food) => (
          <Food key={food.id} food={food} />
        ))}
      </div>
    </div>
  );
}

export default RestFoods;
