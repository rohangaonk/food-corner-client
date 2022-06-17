import React from "react";

function Stats() {
  return (
    <div className="flex flex-col space-y-6">
      <div className="current">
        <p className="text-center">Current</p>
        <div className="_box bg-lightbg drop-shadow-md p-4  text-font-14">
          <div className="flex">
            <div className="w-1/2 text-center">
              <p>New</p>
              <p className="text-primary">20</p>
            </div>
            <div className="w-1/2 text-center">
              <p>In Progress</p>
              <p className="text-primary">10</p>
            </div>
          </div>
          <div className="flex">
            <div className="w-1/2 text-center">
              <p>Confirmed</p>
              <p className="text-primary">30</p>
            </div>
            <div className="w-1/2 text-center">
              <p>Out for Delivery</p>
              <p className="text-primary">10</p>
            </div>
          </div>
        </div>
      </div>
      <div className="_today">
        <p className="text-center">Today</p>
        <div className="_box bg-lightbg drop-shadow-md p-4  text-font-14">
          <div className="flex">
            <div className="w-1/2 text-center">
              <p>Total</p>
              <p className="text-primary">20</p>
            </div>
            <div className="w-1/2 text-center">
              <p>Completed</p>
              <p className="text-primary">10</p>
            </div>
          </div>
          <div className="flex">
            <div className="w-1/2 text-center">
              <p>Declined</p>
              <p className="text-primary">30</p>
            </div>
            <div className="w-1/2 text-center">
              <p>Cancelled</p>
              <p className="text-primary">10</p>
            </div>
          </div>
        </div>
      </div>
      <div className="_allTime">
        <p className="text-center">All Time</p>
        <div className="_box bg-lightbg drop-shadow-md p-4  text-font-14">
          <div className="flex">
            <div className="w-1/2 text-center">
              <p>Total</p>
              <p className="text-primary">20</p>
            </div>
            <div className="w-1/2 text-center">
              <p>Completed</p>
              <p className="text-primary">10</p>
            </div>
          </div>
          <div className="flex">
            <div className="w-1/2 text-center">
              <p>Declined</p>
              <p className="text-primary">30</p>
            </div>
            <div className="w-1/2 text-center">
              <p>Cancelled</p>
              <p className="text-primary">10</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
