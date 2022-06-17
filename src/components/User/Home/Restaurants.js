import React from "react";
import restaurants from "../../../mockData/restaurants.json";
import Restaurant from "./Restaurant";
function Restaurants() {
  return (
    <div className="mt-4 grid grid-cols-4 gap-10">
      {restaurants.map((restaurant) => (
        <Restaurant key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
}

export default Restaurants;
