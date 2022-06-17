import React from "react";
import CartItem from "./CartItem";

function Cart({ maxHeight }) {
  console.log("cart rendered");
  return (
    <div className="container">
      <div className="sticky z-10 top-20 px-4 py-2 shadow-md">
        <div className="flex justify-between ">
          <span className="font-medium">Cart</span>
          <span className="text-font-14 mr-4">3 items</span>
        </div>
        <div
          className="flex flex-col space-y-2 overflow-auto mt-4"
          style={{ maxHeight: maxHeight }}
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <CartItem key={i} />
          ))}
        </div>
        <div className="mt-4">
          <div className="w-full flex justify-between">
            <div className="flex items-center">
              <h1 className="text-font-18 font-medium">Subtotal</h1>
              <span className="text-font-12 px-2">
                (Extra charges may apply)
              </span>
            </div>
            <div className="flex space-x-1 w-2/12 justify-end items-center mr-5">
              <img className="h-3 w-3" src="/rupee.svg" alt="" />
              <span className="">180</span>
            </div>
          </div>
          <div>
            <button className="px-4 py-1 mt-2 text-white bg-primary">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>

    // <div className="w-full">
    //   <div className="flex justify-between sticky top-16 z-40 pb-4 px-4 bg-white">
    //     <span className="font-medium ">Cart</span>
    //     <span className="text-font-14">3 items</span>
    //   </div>
    //   <div className="overflow-auto flex-col space-y-4 sticky top-28 z-30 h-1/2 px-4">
    //     {Array.from({ length: 10 }).map((_, i) => (
    //       <CartItem />
    //     ))}

    //     <div className="w-full flex justify-between">
    //       <div>
    //         <h1 className="text-font-18 font-medium">Subtotal</h1>
    //         <p className="text-font-12">Extra charges may apply</p>
    //       </div>
    //       <div className="flex space-x-1 w-2/12 justify-end items-center">
    //         <img className="h-4" src="/rupee.svg" alt="" />
    //         <span className="font-medium">180</span>
    //       </div>
    //     </div>
    //     <div>
    //       <button>
    //         <span className="px-4 py-1 text-white bg-primary rounded">
    //           Checkout
    //         </span>
    //         <img className="inline h-8 px-2" src="/right_arrow.svg" alt="" />
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Cart;
