import React from "react";

function miniOrder() {
  return (
    <div className="_container p-4 bg-lightbg  drop-shadow-sm  hover:drop-shadow-md text-font-14 flex flex-col space-y-1">
      <div className="_top flex justify-between ">
        <span className="_order_no text-primary">OD23949395993959</span>
        <span className="_time text-primary">30 min</span>
        <span className="_price">
          <img className="h-3 w-3 inline mr-1" src="/rupee.svg" alt="" />
          <span>180</span>
        </span>
      </div>
      <div className="_middle">
        <span className="_address">Patto plaza 402230</span>
      </div>
      <div className="_bottom flex justify-between">
        <span className="_date">10-10-2022, 3:14 PM</span>
        <span className="_status text-highlight">New</span>
      </div>
    </div>
  );
}

export default miniOrder;
