import React from "react";
import SimpleModal from "./Login";
import lang from "../Images/lang.JPG";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";


function Nav() {
  return (
    <div className={styles.innernav}>
    
      <Link to="/">
        <img
          src="https://imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/header/mmtLogoWhite.png"
          width="110"
          style={{ paddingTop: "7px", paddingLeft: "10px" }}
          alt="makemytrip logo"
          
        />
      </Link>
      <div
        style={{
          borderLeft: "1px dotted whitesmoke",
          height: "30px",
          marginTop: "7px",
          paddingLeft: "7px",
          marginLeft: "300px",
          width: "40%",
        }}
        className={styles.mybiz}
      >
        <img
          src="https://imgak.mmtcdn.com/mybiz/assets/images/landing/myBizLogo_light.png"
          width="40"
          style={{ paddingTop: "5px" }}
          alt="mybiz"
        />
        <h4
          style={{
            color: "white",
            fontWeight: "600",
            fontSize: "13px",
            marginTop: "-28px",
            marginLeft: "45px",
          }}
        >
          Introducing myBiz
        </h4>
        <h6
          style={{
            color: "white",
            fontWeight: "500",
            fontSize: "9.5px",
            marginTop: "-17px",
            marginLeft: "45px",
          }}
          className={styles.mmt}
        >
          MakeMyTrip for Business
        </h6>
      </div>
      <div
        style={{
          width: "100%",
          marginLeft: "65px",
          borderLeft: "1px dotted whitesmoke",
          height: "30px",
          paddingLeft: "7px",
          marginTop: "5px",
        }}
        className={styles.trips}
      >
        <img
          src="https://americantourister.co.za/wp-content/uploads/2019/07/59422-7976_01.jpg"
          style={{ paddingTop: "4px" }}
          width="15"
          alt="myTrip icon"
          
        />
        <h4
          style={{
            color: "white",
            fontWeight: "500",
            fontSize: "11px",
            marginTop: "-30px",
            marginLeft: "20px",
          }}
        >
          My Trips
        </h4>
        <h6
          style={{
            color: "white",
            fontWeight: "500",
            marginTop: "-15px",
            marginLeft: "20px",
          }}
        >
          Manage your bookings
        </h6>
      </div>
      
        <SimpleModal className={styles.modal}/>
      <img
        src={lang}
        style={{
          width: "70%",
          paddingLeft: "55px",
          height: "38px",
          marginTop: "5px",
        }}
        alt="language"
      />
    </div>
  );
}

export { Nav };
