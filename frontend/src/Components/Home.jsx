import React from "react";
import { BelowTravelBlogSection } from "./Content/BelowTravelBlogSection";
import { BusesFromSection } from "./Content/BusesFromSection";
import { TravelVlogSection } from "./Content/TravelVlogSection";
import { AboveFooterSection } from "./Footer/AboveFooterSection";
import { NavList } from "../../src/Components/NavList/NavList";
import { Navbar } from "./Navbar/Navbar";


function Home() {
  return (
    <>
      <Navbar/>
      <NavList />
      <BusesFromSection />
      <TravelVlogSection />
      <BelowTravelBlogSection />
      <AboveFooterSection />
    </>
  );
}

export { Home };
