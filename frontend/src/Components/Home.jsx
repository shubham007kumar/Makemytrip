import React from "react";
import { NavList } from "../../src/Components/NavList/NavList";
import { Navbar } from "./Navbar/Navbar";
import { Nav } from "./Navbar/Nav";
import { FloatNav } from "./Navbar/FloatNav";
import { Menu, Burger } from "../Components/Navbar/SideBar";
import { Content } from "./Homepage/Content/Content";

function Home() {
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();
  return (
    <div>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
      <FloatNav />
      <Nav />
      <Navbar />
      <NavList />
      <Content/>
      
    </div>
  );
}

export { Home };
