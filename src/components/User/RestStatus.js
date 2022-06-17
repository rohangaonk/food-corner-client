import React from "react";

function RestStatus() {
  return (
    <div className=" flex flex-col space-y-4">
      <div className="flex w-72 justify-between items-center text-font-14 ">
        <span className="bg-primary text-white rounded-l-full rounded-r-full px-4">
          Open
        </span>
        <h2 className="font-medium">10 AM to 9 PM</h2>
        <h2>
          <button>
            <span>Reviews</span>
            <img className="w-8 h-8 inline" src="/right_arrow.svg" alt="" />
          </button>
        </h2>
      </div>
      <div className="flex justify-between text-font-14">
        <div>
          <h2 className="text-font-12">Ratings</h2>
          <img className="inline mr-1 mb-1" src="/rating.svg" alt="" />
          <span className="font-medium">4.5</span>
          <span className="text-font-12 mx-1">(20)</span>
        </div>
        <div className="bg-primary max-h-full w-px"></div>
        <div>
          <h2 className="text-font-12">Cost for 2</h2>
          <div className="flex items-center">
            <img className="inline p-1" src="/rupee.svg" alt="" />
            <span className="font-medium">500</span>
          </div>
        </div>
        <div className="bg-primary max-h-full w-px"></div>
        <div>
          <h2 className="text-font-12">Delivery Time</h2>
          <div className="flex items-center">
            <img src="/time.svg" alt="" />
            <span className="font-medium">30 min</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestStatus;
