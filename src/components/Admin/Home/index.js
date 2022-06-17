import React from "react";
import Navbar from "../Navbar";
import RestDetails from "../RestDetails";
import MiniOrder from "../MiniOrder";
import FoodItem from "./FoodItem";

function index() {
  return (
    <div>
      <Navbar />
      <div className="flex mx-16 space-x-4 ">
        <div className="w-4/12 sticky top-20  self-start">
          <RestDetails />
        </div>
        <div className="w-8/12">
          <div className="_new_orders w-full">
            <p className="text-primary my-2">New Orders</p>
            <div className="flex space-x-2">
              {Array.from({ length: 2 }).map((_) => (
                <div className="w-6/12 ">
                  <MiniOrder />
                </div>
              ))}
            </div>
          </div>
          <div className="_popular_food w-full">
            <p className="text-primary my-2">Popular Food</p>
            <div className="flex justify-between">
              {Array.from({ length: 4 }).map((_, i) => (
                <div>
                  <FoodItem key={i} food={"food3.jpg"} />
                </div>
              ))}
            </div>
          </div>
          <div className="_new_ood w-full">
            <p className="text-primary my-2">New Food</p>
            <div className="flex justify-between">
              {Array.from({ length: 4 }).map((_, i) => (
                <div>
                  <FoodItem key={i} food={"food2.jpg"} />
                </div>
              ))}
            </div>
          </div>
          <div className="_featured">
            <p className="text-primary my-2">Featured</p>
            <div className="flex justify-between">
              {Array.from({ length: 4 }).map((_, i) => (
                <div>
                  <FoodItem key={i} food={"food4.jpg"} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
