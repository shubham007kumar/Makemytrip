import React from "react";
import { BelowTravelBlogSection } from "./Content/BelowTravelBlogSection";
import { BusesFromSection } from "./Content/BusesFromSection";
import { TravelVlogSection } from "./Content/TravelVlogSection";
import { NavList } from "../../src/Components/NavList/NavList";
import { Navbar } from "./Navbar/Navbar";

import { AboveFooterSection } from "../Components/Footer/AboveFooterSection";
import { Nav } from "./Navbar/Nav";
import { FloatNav } from "./Navbar/FloatNav";
import {Menu, Burger} from '../Components/Navbar/SideBar';

function Home() {
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();
  return (

    <div>
      <div ref={node}>
        <Burger open={open } setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
      <FloatNav/> 
      <Nav />
      <Navbar />
      <NavList />
      <BusesFromSection />
      <TravelVlogSection />
      <AboveFooterSection />
      <BelowTravelBlogSection />
      <AboveFooterSection />
    </div>
  );
}

export { Home };
