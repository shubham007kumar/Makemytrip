import React from "react";
import { BelowTravelBlogSection } from "./Content/BelowTravelBlogSection";
import { BusesFromSection } from "./Content/BusesFromSection";
import { TravelVlogSection } from "./Content/TravelVlogSection";
import { AboveFooterSection } from "./Footer/AboveFooterSection";
import { NavList } from "../../src/Components/NavList/NavList";


function Home() {
  return (
    <>
      <NavList />
      <BusesFromSection />
      <TravelVlogSection />
      <BelowTravelBlogSection />
    </>
  );
}

export { Home };
