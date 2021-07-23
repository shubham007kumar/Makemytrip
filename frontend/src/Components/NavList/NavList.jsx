import React from "react";
import styles from "./NavList.module.css";
import { Link } from "react-router-dom";

function NavList() {
  return (
    <div style={{ maxWidth: "80%", margin: "auto", position: "relative" }}>
      <div className={styles.navbr}>
        <ul>
          <img
            src="https://static.thenounproject.com/png/1606503-200.png"
            width="80"
            style={{ marginLeft: "-30px", marginTop: "-30px" }}
          />
          <p
            style={{
              fontWeight: "200",
              color: "#4a4a4a",
              marginTop: "-16px",
              marginLeft: "-5px",
              fontSize: "14px",
            }}
          >
            Flights
          </p>
        </ul>
        <ul>
          <img
            src="https://static.thenounproject.com/png/803591-200.png"
            width="40"
            style={{ marginLeft: "-20px", marginTop: "-10px" }}
          />
          <p
            style={{
              fontWeight: "200",
              color: "#4a4a4a",
              marginTop: "4px",
              marginLeft: "-19px",
              fontSize: "14px",
            }}
          >
            Hotels
          </p>
        </ul>
        <ul>
          <img
            src="https://static.thenounproject.com/png/3626992-200.png"
            width="40"
            style={{ marginLeft: "-18px", marginTop: "-10px" }}
          />
          <p
            style={{
              fontWeight: "200",
              color: "#4a4a4a",
              marginTop: "4px",
              marginLeft: "-33px",
              fontSize: "14px",
            }}
          >
            Villas & Apts
          </p>
        </ul>
        <ul style={{ width: "80%" }}>
          <img
            src="https://static.thenounproject.com/png/1990676-200.png"
            width="50"
            style={{ marginLeft: "-5px", marginTop: "-19px" }}
          />
          <p
            style={{
              fontWeight: "200",
              color: "#4a4a4a",
              marginTop: "3px",
              marginLeft: "-35px",
              fontSize: "14px",
            }}
          >
            Holiday Packages
          </p>
        </ul>
        <ul style={{ marginLeft: "23px" }}>
          <img
            src="https://static.thenounproject.com/png/2668613-200.png"
            width="30"
            style={{ marginLeft: "-20px", marginTop: "-4px" }}
          />
          <p
            style={{
              fontWeight: "200",
              color: "#4a4a4a",
              marginTop: "8px",
              marginLeft: "-25px",
              fontSize: "14px",
            }}
          >
            Trains
          </p>
        </ul>
        <Link to="" style={{ textDecoration: "none" }}>
          <ul>
            <img
              src="https://static.thenounproject.com/png/4078384-200.png"
              width="30"
              style={{ marginLeft: "-10px", marginTop: "-4px" }}
            />
            <p
              style={{
                fontWeight: "200",
                color: "#4a4a4a",
                marginTop: "8px",
                marginLeft: "-15px",
                fontSize: "14px",
              }}
            >
              Buses
            </p>
          </ul>
        </Link>
        <ul>
          <img
            src="https://static.thenounproject.com/png/4077543-200.png"
            width="30"
            style={{ marginLeft: "-10px", marginTop: "-4px" }}
          />
          <p
            style={{
              fontWeight: "200",
              color: "#4a4a4a",
              marginTop: "8px",
              marginLeft: "-10px",
              fontSize: "14px",
            }}
          >
            Cabs
          </p>
        </ul>
        <ul>
          <img
            src="https://static.thenounproject.com/png/2995196-200.png"
            width="30"
            style={{ marginLeft: "-10px", marginTop: "-4px" }}
          />
          <p
            style={{
              fontWeight: "200",
              color: "#4a4a4a",
              marginTop: "8px",
              marginLeft: "-10px",
              fontSize: "14px",
            }}
          >
            Visa
          </p>
        </ul>
        <ul>
          <img
            src="https://static.thenounproject.com/png/2165520-200.png"
            width="30"
            style={{ marginLeft: "-10px", marginTop: "-4px" }}
          />
          <p
            style={{
              fontWeight: "200",
              color: "#4a4a4a",
              marginTop: "8px",
              marginLeft: "-25px",
              fontSize: "14px",
            }}
          >
            More
            <img
              src="https://static.thenounproject.com/png/636007-200.png"
              width="15"
              style={{ marginLeft: "5px" }}
            />
          </p>
        </ul>
      </div>
      <div className={styles.fromto}>
        <p style={{marginTop:'55px',textAlign:'center',letterSpacing:'-2',fontWeight:'600',fontSize:'15px', color:'#4a4a4a'}}>Bus Ticket Booking. <a style={{color:'#0a81ff'}}>Travelling with a group? Hire a bus.</a></p>
      </div>
    </div>
  );
}

export { NavList };