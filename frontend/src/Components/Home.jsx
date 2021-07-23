import React from "react";
import { BelowTravelBlogSection } from "./Content/BelowTravelBlogSection";
import { BusesFromSection } from "./Content/BusesFromSection";
import { TravelVlogSection } from "./Content/TravelVlogSection";
import { AboveFooterSection } from "./Footer/AboveFooterSection";


function Home() {
  return (
    <>
      
      <BusesFromSection />
      <TravelVlogSection />
      <BelowTravelBlogSection />
    </>
  );
}

export { Home };
