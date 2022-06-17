import React from "react";
import Cart from "./Cart";
import RestFoods from "./Foods";

function RestBody() {
  return (
    <div className="mx-16 mt-20">
      <div>
        <hr />
      </div>
      <div className="flex mt-2 space-x-20">
        <RestFoods />
        <Cart maxHeight={192} />
      </div>
    </div>
  );
}

export default RestBody;
