import React from 'react';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import styles from "./TripMoneySection.module.css"
const TripMoneySection = () => {
    return (
    <div className={styles.mainTripDiv}>
        <div className={styles.individualTripDiv} style={{border:"4px solid yellow"}}>
            <div className={styles.imgTripDiv}>
                <img className={styles.imgTripClass} alt="tripmoney" src="https://www.tripmoney.com/ext/static/credit-card/cc@3x.png"/>
            </div>
            <div className={styles.insideTripDivFlex}>
                <img className={styles.imgTripWord} alt="tripmoney" src="https://i.ibb.co/kKBPCwq/tripmoney.png"/>
                <h2 className={styles.margonZero}>Credit Cards</h2>
                <p className={styles.margonZero}>Get instant approval & unmatched privileges.</p>
            </div>

            <div className={styles.arrowClass}>
                <ArrowRightAltIcon fontSize="large" color="primary" />
            </div>
            
        </div>

        <div className={styles.individualTripDiv} style={{border:"4px solid pink"}}>
            <div>
                <img className={styles.imgTripClass} alt="tripmoney" src="https://www.tripmoney.com/ext/static/TravelLoan/travelLoan.png"/>
            </div>
            <div className={styles.insideTripDivFlex}>
                <img className={styles.imgTripWord} alt="tripmoney" src="https://i.ibb.co/kKBPCwq/tripmoney.png"/>
                <h2 className={styles.margonZero}>Travel Loan</h2>
                <p className={styles.margonZero}>Get upto ₹1 lakh lifetime limit.</p>
            </div>

            <div className={styles.arrowClass}>
            <ArrowRightAltIcon fontSize="large" color="primary" />
            </div>
            
        </div>

        <div className={styles.individualTripDiv} style={{border:"4px solid cyan"}}>
            <div>
                <img className={styles.imgTripClass} alt="tripmoney" src="https://www.tripmoney.com/ext/static/PL/pl.png"/>
            </div>
            <div className={styles.insideTripDivFlex}>
                <img className={styles.imgTripWord} alt="tripmoney" src="https://i.ibb.co/kKBPCwq/tripmoney.png"/>
                <h2 className={styles.margonZero}>Personal Loan</h2>
                <p className={styles.margonZero}>Get approval for upto ₹30,00,000 at low interest rates.</p>
            </div>

            <div className={styles.arrowClass}>
            <ArrowRightAltIcon fontSize="large" color="primary" />
            </div>
            
        </div>
    </div>
        
    )
}

export {TripMoneySection}
