import React from "react";
import { Link } from "react-router-dom";
import styles from "../NavList/NavList.module.css";
import lang1 from "../Images/lang1.JPG";
import SimpleModal from "./Login";

function FloatNav() {
  const [show, setShow] = React.useState(true);

  const controlnav = () => {
    if (window.scrollY > 1) {
      setShow(false);
    } else {
      setShow(true);
    }
  };
  React.useEffect(() => {
    window.addEventListener("scroll", controlnav);
    return () => {
      window.removeEventListener("scroll", controlnav);
    };
  }, []);

  return (
    <div
      className={show ? styles.Navv : styles.Nav}
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        width: "100%",
        height: "80px",
        backgroundColor: "white",
      }}
    >
      <div style={{ width: "70%" }} className={styles.logo}>
        <Link to="/">
          <img
            src="https://cdn.freelogovectors.net/wp-content/uploads/2018/07/makemytrip-logo.png"
            width="110"
            style={{ marginTop: "10px", paddingLeft: "160px" }}
            alt="makemytrip logo"
          />
        </Link>
      </div>
      <div className={styles.floatnav}>
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
        <ul style={{ width: "70%" }}>
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
        <ul style={{ width: "100%", marginLeft: "20px" }}>
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
      <Link>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}>
        <div className={styles.green}>
          <p className={styles.my}>my</p>
        </div>
        <p
          style={{
            marginLeft: "10px",
            width: "60%",
            fontSize: "12px",
            fontWeight: "bolder",
            marginTop: "20px",
            height: "30px",
          }}
        >
          Login or Create Account
        </p>
        <img src={lang1} alt="language" style={{ marginTop: "10px" }} />
      </div>
      </Link>
    </div>
  );
}

export { FloatNav };
