import { Box } from '@material-ui/core'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styles from "./SuperOffer.module.css";

const useStyles = makeStyles({
   Box_Class: {
     padding:"1vw",
     borderRadius:"20px",
     width:"85vw",
     margin:"auto",
     backgroundColor:'white'
    },
    Box_Card_Flex:{
        display:"flex",
        flexDirection:"row",
        gap:"1vw",
        padding:"2vw",
        margin:"1vw",
        width:"35vw"
    }
  });


const SuperOffer = () => {
    const classes = useStyles();
    return (
        <div>
            <Box boxShadow={3} className={classes.Box_Class} >
              <div className={styles.superOfferNavBar}>
                        <div>
                            <h1 className={styles.h1Class}>Super Offers</h1>
                        </div>
                        <div className={styles.buttonFlex}>
                            <button className={styles.SuperOfferButtonClass}>BUS</button>
                            <button className={styles.SuperOfferButtonClass}>ALL OFFERS</button>
                            <button className={styles.SuperOfferButtonClass}>CAB</button>
                            <button className={styles.SuperOfferButtonClass}>MORE</button>
                        </div>
                        <div>
                            <button className={styles.backArrowButton}> {"<"} </button>
                            <button className={styles.frontArrowButton}> {">"} </button>
                        </div>
              </div>

              <div className={styles.Cardflex}>
                  <Box boxShadow={3} className={classes.Box_Card_Flex}>
                      <div>
                          <img alt="superOffer"src="https://promos.makemytrip.com/notification/xhdpi//hdfc-116x116-01072021.jpg" />
                        <p className={styles.termsandConditions}>T&C apply</p>
                      </div>
                      <div>
                          <h2>JUST IN: Huge Savings on Flights, Hotels and Cabs</h2>
                          <p style={{color:"red"}}>--------</p>
                          <p className={styles.paraClaass}>& more with HDFC Bank Credit Cards for your next refreshing break</p>
                        <p className={styles.viewDetailsClass}>View Details</p>
                      </div>
                  </Box>

                  <Box boxShadow={3} className={classes.Box_Card_Flex}>
                      <div>
                          <img alt="superOffer"src="https://promos.makemytrip.com/notification/xhdpi//hotels-116x116-22062021.jpg" />
                        <p className={styles.termsandConditions}>T&C apply</p>
                      </div>
                      <div>
                          <h2>What's Essential Before Vacation? Vaccination!</h2>
                          <p style={{color:"red"}}>--------</p>
                          <p className={styles.paraClaass}>50k+ travellers have linked their certificates</p>
                        <p className={styles.viewDetailsClass}>View Details</p>
                      </div>
                  </Box>

                  
                  
              </div>
            </Box>
        </div>
    )
}

export {SuperOffer}
