import React from "react";
import CartFood from "./CartFood";
import adminCart from "../../../mockData/adminCart.json";

function orderMain({ setVisible, orderData }) {
  return (
    <div className="flex flex-col py-1 bg-lightbg drop-shadow-md text-font-14 space-y-1">
      <div className="_cancel px-4 w-full">
        <button className="text-highlight" onClick={() => setVisible(false)}>
          <strong>X</strong>
        </button>
      </div>
      <div className="_otherDetails px-4 flex flex-col space-y-2">
        <div className="_orderId flex justify-between">
          <span className="text-primary">OD23949395993959</span>
          <span className="text-highlight">New</span>
        </div>
        <div className="_userDetails flex justify-between">
          <span>Rohan Gaonkar</span>
          <span>9403029587</span>
        </div>
        <div className="_orderTime flex justify-between">
          <span className="_date">10-10-2022, 3:14 PM</span>
          <span className="_time text-primary">30 min</span>
        </div>
        <div className="_orderLocation flex justify-between">
          <span className="_address">Patto plaza 402230</span>
          <button className="btn-primary">Locate</button>
        </div>
      </div>
      <div className="_cartDetails flex flex-col space-y-2 max-h-60 overflow-y-scroll">
        {adminCart.map((item, i) => (
          <div key={i}>
            <CartFood cartFood={item} />
          </div>
        ))}
      </div>
      <div className="_total pl-4 pr-8 flex flex-col space-y-1 w-1/2 self-end text-font-14">
        <div className="_subtotal flex justify-between">
          <span>Sub total</span>
          <div className="flex items-center">
            <img className="inline p-1" src="/rupee.svg" alt="" />
            <span className="font-medium">568</span>
          </div>
        </div>
        <div className="_delivery flex justify-between">
          <span>Deliver</span>
          <div className="flex items-center">
            <img className="inline p-1" src="/rupee.svg" alt="" />
            <span className="font-medium">50</span>
          </div>
        </div>
        <div className="_total flex justify-between">
          <span>Total</span>
          <div className="flex items-center">
            <img className="inline p-1" src="/rupee.svg" alt="" />
            <span className="font-medium">618</span>
          </div>
        </div>
      </div>
      <div className="_actions flex justify-between px-4 py-2">
        <button className="btn-secondary">Decline</button>
        <button className="btn-primary">Confirm</button>
      </div>
    </div>
  );
}

export default orderMain;
