import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import my from "../Images/my.JPG";
import styles from "./Navbar.module.css";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Link } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import {axios} from 'axios';



const useStyles = makeStyles((theme) => ({
  paper: {
    top: "53%",
    left: "50%",
    width: "470px",
    minHeight: "480px",
    padding: "30px",
    position: "fixed",
    minWidth: "470px",
    borderRadius: "10px",
    zIndex: "2",
    backgroundColor: " #fff",
    transform: " translate(-50%,-50%)",
    boxShadow: "0 1px 7px 0 rgb(0 0 0 / 40%)",
    border: "2px solid white",
  },
  account: {
    padding: "7px",
    borderRadius: "51px",
    backgroundColor: " #fff",
    boxShadow: "0 1px 7px 0 rgb(0 0 0 / 30%)",
    minHeight: "30px",
    display: "grid",
    maxWidth: "450px",
    gridTemplateColumns: "repeat(2,1fr)",
  },
  pact: {
    backgroundImage: "linear-gradient(93deg,#53b2fe,#065af3)",
    flex: "1",
    cursor: "pointer",
    padding: "7px 14px",
    borderRadius: "150px",
    fontSize: "15px",
    lineHeight: "15px",
    width: "90%",
    listStyle: "none",
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
  },
  inpt: {
    width: "100%",
    height: "35px",
    maxWidth: "450px",
    paddingLeft: "10px",
    marginTop: "10px",
    borderRadius: "4px",
    caretColor: "blue",
    border: "1px solid grey",
  },
  loader: {
    maxWidth: "464px",
    height: "35px",
    backgroundColor: "#d0cfcf",
    marginTop: "30px",
    paddingTop: "5px",
  },
  root: {
    position: "relative",
  },
  bottom: {
    color: "whitesmoke",
  },
  top: {
    color: "white",
    animationDuration: "550ms",
    position: "absolute",
    left: 240,
  },
  circle: {
    strokeLinecap: "round",
  },
}));

export default function SimpleModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  //   const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogin =(res) => {
    console.log(res)
    axios({
      method: "POST", 
      url : "http://localhost:3000/api/googlelogin",
      data: {tokenId: res.tokenId}  
    })
    .then((res) => {
      console.log("login sucess", res)
    })
  };
  const google = "https://img.icons8.com/color/452/google-logo.png"
  const body = (
    <div className={classes.paper}>
      <div className={classes.account}>
        <li className={classes.pact}>PERSONAL ACCOUNT</li>
        <li
          style={{
            listStyle: "none",
            marginLeft: "50px",
            marginTop: "5px",
            fontWeight: "bold",
            color: "#565254",
          }}
        >
          MYBIZ ACCOUNT
        </li>
      </div>
      <h2
        style={{
          fontSize: "26px",
          lineHeight: "26px",
          paddingTop: "10px",
          color: " #4a4a4a",
          fontWeight: "bolder",
        }}
      >
        Login/Signup
      </h2>
      <label style={{ fontSize: "14px" }} for="eon">
        Email or Mobile Number
        <br />
        <input
          className={classes.inpt}
          type="text"
          id="eon"
          placeholder="Enter email or mobile number"
        />
      </label>
      <div className={classes.loader}>
        <CircularProgress
          variant="indeterminate"
          disableShrink
          className={classes.top}
          classes={{
            circle: classes.circle,
          }}
          size={25}
          thickness={4}
        />
      </div>
      <h5
        style={{
          color: "darkgrey",
          fontWeight: "300",
          textAlign: "center",
          fontSize: "12px",
        }}
      >
        Or Login/Signup with
      </h5>

      <GoogleLogin
        clientId="399112532210-i8tpsqur39kg7if2523k17gjfio23lot.apps.googleusercontent.com"
        buttonText="Log in with Google"
        onSuccess={handleLogin}
        onFailure={handleLogin}
        cookiePolicy={"single_host_origin"}
        render={(renderProps) => (
          <button style={{width:'99%', backgroundColor:'white', height:'40px', border:'1px solid darkgrey', borderRadius:'5px', color:'#4a4a4a', fontWeight:'bold'}} onClick={renderProps.onClick} disabled={renderProps.disabled}>
            <img src={google} alt="google login" style={{width :'30px' ,marginTop:'2px', marginLeft:'-150px'}}/>
            <p style={{marginTop:'-25px'}}>
            Login with Google
            </p>
          </button>
        )}
        
      />
      
      <p
        style={{
          fontSize: "12px",
          textAlign: "center",
          letterSpacing: "2",
          marginTop: "30px",
        }}
      >
        By proceeding, you agree to MakeMyTrip's
        <a className={styles.colour}> Privacy Policy</a>,
        <a className={styles.colour}> User Agreement</a> and
        <a className={styles.colour}> T&Cs</a>
      </p>
    </div>
  );

  return (
    <div>
      <img
        src={my}
        style={{
          backgroundImage: "linear-gradient(45deg,#53b2fe,#065af3)",
          width: "115%",
          marginLeft: "20px",
          height: "38px",
          marginTop: "5px",
          borderRadius: "4px",
        }}
        alt="form"
        onClick={handleOpen}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        disableAutoFocus
        style={{ border: "none" }}
      >
        {body}
      </Modal>
    </div>
  );
}
