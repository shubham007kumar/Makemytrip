import React from "react";
import { BelowTravelBlogSection } from "./Content/BelowTravelBlogSection";
import { BusesFromSection } from "./Content/BusesFromSection";
import { TravelVlogSection } from "./Content/TravelVlogSection";
import { NavList } from "../../src/Components/NavList/NavList";
import { Navbar } from "../Components/Navbar/Navbar";
import { AboveFooterSection } from "../Components/Footer/AboveFooterSection";
import { Nav } from "./Navbar/Nav";

function Home() {
  return (
    <>
      <Nav />
      <Navbar />
      <NavList />
      <BusesFromSection />
      <TravelVlogSection />
      <AboveFooterSection />
      <BelowTravelBlogSection />
    </>
  );
}

export { Home };
