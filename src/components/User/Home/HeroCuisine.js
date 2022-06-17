import React, { createRef, useState } from "react";
import Cuisine from "./Cuisine";
import cuisines from "../../../mockData/cuisine.json";
import MyCarousel from "../MyCarousel";

function HeroCuisine() {
  const [cuisinesArr, setCuisinesArr] = useState(cuisines);

  return (
    // <div className="flex justify-between items-center mx-16  space-x-24 -mt-24">
    //   <button onClick={() => rotateLeft()}>
    //     <img className="h-16 w-16" src="/left_arrow.svg" alt="" />
    //   </button>
    <div className="mx-16 -mt-20 ">
      <MyCarousel
        buttonRight={
          <img className="h-12 w-12 ml-8" src="/right_arrow.svg" alt="" />
        }
        buttonLeft={
          <img className="h-12 w-12 mr-8" src="/left_arrow.svg" alt="" />
        }
        gapInpx={110}
      >
        {cuisinesArr.map((cuisine, index) => (
          <Cuisine key={index} cuisine={cuisine} />
        ))}
      </MyCarousel>
    </div>
    //   <button onClick={() => rotateRight()}>
    //     <img className="h-16 w-16" src="/right_arrow.svg" alt="" />
    //   </button>
    // </div>
  );
}

export default HeroCuisine;
