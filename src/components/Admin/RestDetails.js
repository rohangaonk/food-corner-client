import React from "react";
import DayWeek from "./DayWeek";

function RestDetails() {
  return (
    <div className="flex flex-col space-y-4 text-font-12  bg-lightbg drop-shadow-md px-4 py-2">
      <div className="px-2">
        <div>
          <div className="absolute  bg-primary px-2 py-1 text-font-14 text-white tracking-wide">
            Open
          </div>
          <img className="w-60 h-44" src="/rest1.jpg" alt="" />
        </div>

        <h1 className="font-medium text-font-24 text-primary ">
          Flora Kitchen
        </h1>
        <p className="_description">The taste that you want to have more</p>
      </div>
      <div className="_address_review flex justify-between">
        <div>
          <img className="inline w-5 h-5 " src="location.svg" alt="" />
          <span> Panaji, patto center 403401</span>
        </div>
        <div>
          <span>Reviews</span>
          <span>
            <img className="w-6 h-6 inline" src="/right_arrow.svg" alt="" />
          </span>
        </div>
      </div>
      <div className="flex justify-between px-1 ">
        <div className="flex items-center">
          <img className="inline h-4 w-4 mr-1" src="/time.svg" alt="" />
          <span>30 Mins</span>
        </div>
        <div className="_separator bg-primary max-h-full w-px"></div>
        <div className="flex items-center">
          <img className="inline h-3 w-3 mr-1" src="/rating.svg" alt="" />
          <span>
            4.1 <span>(20)</span>
          </span>
        </div>
        <div className="_separator bg-primary max-h-full w-px"></div>
        <div>
          <p>10 AM to 9 PM</p>
        </div>
      </div>
      <div className="_prices flex justify-between px-1">
        <div>
          <p className="">Delivery</p>
          <img className="h-3 w-2 inline mr-1" src="/rupee.svg" alt="" />
          <span>50</span>
        </div>
        <div className="_separator bg-primary max-h-full w-px"></div>
        <div>
          <p className="">Cost for 2</p>
          <img className="h-3 w-2 inline mr-1" src="/rupee.svg" alt="" />
          <span>50</span>
        </div>
        <div className="_separator bg-primary max-h-full w-px"></div>
        <div>
          <p>Min. Order</p>
          <img className="h-3 w-2 inline mr-1" src="/rupee.svg" alt="" />
          <span>300</span>
        </div>
      </div>
      <p className="_cuisines text-font-12">Goan, Chinese, Italian, Maxican</p>
      <div className="_weekDays flex justify-between">
        <DayWeek name="S" isActive={false} />
        <DayWeek name="M" isActive={true} />
        <DayWeek name="T" isActive={true} />
        <DayWeek name="W" isActive={false} />
        <DayWeek name="T" isActive={true} />
        <DayWeek name="F" isActive={true} />
        <DayWeek name="S" isActive={true} />
      </div>

      <button className="px-4 py-2 bg-primary text-font-14 text-white font-light">
        Edit Profile
      </button>
    </div>
  );
}

export default RestDetails;
