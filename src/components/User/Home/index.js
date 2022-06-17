import React from "react";
import Hero from "./Hero";
import HeroCuisine from "./HeroCuisine";
import Navbar from "../Navbar";
import RestListings from "./RestListings";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeroCuisine />
      <RestListings />
    </div>
  );
}

export default Home;
