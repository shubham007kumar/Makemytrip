import React from "react";
import { NavList } from "../NavList/NavList";
import { Nav } from "./Nav";
import styles from "./Navbar.module.css";
import {Link} from 'react-router-dom';



function Navbar() {
  return (
    <div className={styles.mainnav}>
      <div className={styles.logo}>
      <Link to="/">
        <img
          src="https://imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/header/mmtLogoWhite.png"
          width="110"
          style={{ paddingTop: "7px", paddingLeft: "10px" }}
          alt="makemytrip logo"
          
        />
      </Link>
      </div>
    </div>
  );
}

export { Navbar };
