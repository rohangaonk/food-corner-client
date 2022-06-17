import React, { useState } from "react";
import Navbar from "../Navbar";
import Stats from "./Stats";
import AllOrders from "./AllOrders";
import OrderMain from "./OrderMain";
import RestDetails from "../RestDetails";

function Index() {
  const [orderVisible, setOrderVisible] = useState(false);
  const [orderData, setOrderData] = useState(null);

  return (
    <>
      <Navbar />
      <div className="flex mx-16 space-x-4">
        <div className="w-4/12 sticky top-24 self-start">
          <RestDetails />
        </div>
        <div className="w-4/12 mt-6">
          <AllOrders setOrderData={setOrderData} orderOpen={setOrderVisible} />
        </div>
        <div className="w-4/12 sticky top-24 self-start">
          {orderVisible ? (
            <OrderMain orderData={orderData} setVisible={setOrderVisible} />
          ) : (
            <Stats />
          )}
        </div>
      </div>
    </>
  );
}

export default Index;
