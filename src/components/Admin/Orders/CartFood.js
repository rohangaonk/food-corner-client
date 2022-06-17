import React from "react";

function CartFood({ cartFood }) {
  return (
    <div className=" bg-secondary px-4 py-2 flex flex-col space-y-2">
      <div className="_name flex justify-between">
        <div className="flex items-center">
          <img className="inline pr-2" src="/veg.svg" alt="" />
          <span className="text-font-14 font-medium">{cartFood.name}</span>
        </div>
        <div className="flex items-center">
          <img className="inline p-1" src="/rupee.svg" alt="" />
          <span className="font-medium">{cartFood.unitPrice}</span>
        </div>
      </div>
      <div className="_sizebox">
        {cartFood.size ? (
          <div className="flex text-font-12">
            <div className="_extras flex w-1/3 ">
              <span>Size</span>
            </div>
            <div className="flex flex-col space-y-2 w-2/3 ">
              <div className="flex justify-between ">
                <span>{cartFood.size.type}</span>
                <div className="flex items-center">
                  <img className="inline p-1 h-4" src="/rupee.svg" alt="" />
                  <span className="font-medium">
                    {cartFood.size.additional}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="_extrasBox">
        {cartFood.extras.length ? (
          <div className="flex text-font-12">
            <div className="_extras flex w-1/3 ">
              <span>Extras</span>
            </div>
            <div className="flex flex-col space-y-2 w-2/3 ">
              {cartFood.extras.map((item, i) => (
                <div key={i} className="flex justify-between ">
                  <span>{item.name}</span>
                  <div className="flex items-center">
                    <img className="inline p-1 h-4" src="/rupee.svg" alt="" />
                    <span className="font-medium">{item.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="_separator bg-gray-400 w-full h-px"></div>
      <div className="_total flex justify-end items-center">
        <span className="text-font-12 font-light mx-2">
          {cartFood.quantity} X
        </span>
        <div className="flex items-center">
          <img className="inline p-1" src="/rupee.svg" alt="" />
          <span className="font-medium">{cartFood.totalUnitPrice}</span>
        </div>
      </div>
    </div>
  );
}

export default CartFood;
