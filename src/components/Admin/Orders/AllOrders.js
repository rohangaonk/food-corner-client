import React from "react";
import MiniOrder from "../MiniOrder";
function allOrders({ orderOpen, setOrderData }) {
  return (
    <div className="_container flex flex-col space-y-2">
      <div className="_header flex justify-between font-medium">
        <p className="text-primary cursor-pointer">New</p>
        <p className="text-highlight cursor-pointer">Ongoing</p>
        <p className="text-highlight cursor-pointer">Past</p>
      </div>
      <div className="_orders flex flex-col space-y-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            className="cursor-pointer"
            key={i}
            onClick={() => {
              setOrderData(i);
              orderOpen(true);
            }}
          >
            <MiniOrder />
          </div>
        ))}
      </div>
    </div>
  );
}

export default allOrders;
