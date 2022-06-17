import React from "react";

function CartItem() {
  return (
    <React.Fragment>
      <div className="flex justify-between space-x-4">
        <div className="w-8/12 flex flex-col items-start">
          <div className=" flex items-start">
            <img className="inline pr-2" src="/veg.svg" alt="" />
            <span className="text-font-14 font-medium">Aloo Paratha </span>
          </div>
          {/* <button className="text-font-12 px-1 ml-6  border-primary">
            <span>customize</span>{" "}
            <img className="inline h-6" src="/right_arrow.svg" alt="" />
          </button> */}
        </div>
        <div className="w-2/12 flex space-x-2 justify-center items-center">
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </div>
        <div className="flex space-x-1 w-2/12 justify-center items-center">
          <img className="h-3 w-3" src="/rupee.svg" alt="" />
          <span>180</span>
        </div>
      </div>
      <hr />
    </React.Fragment>
  );
}

export default CartItem;
