import React from "react";
import { BelowTravelBlogSection } from "./Content/BelowTravelBlogSection";
import { BusesFromSection } from "./Content/BusesFromSection";
import { TravelVlogSection } from "./Content/TravelVlogSection";
import { NavList } from "../../src/Components/NavList/NavList";
import { Navbar } from "./Navbar/Navbar";

import { AboveFooterSection } from "../Components/Footer/AboveFooterSection";

function Home() {
  return (
    <>
      <Navbar/>
      <NavList />
      <BusesFromSection />
      <TravelVlogSection />
      <AboveFooterSection />
      <BelowTravelBlogSection />
      <AboveFooterSection />
    </>
  );
}

export { Home };
