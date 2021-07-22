import React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import styles from "./HomePageFooter.module.css";

const HomePageFooter = () => {
   
    return (
        <div className={styles.mainFooterDiv}>
            <div className={styles.footerFlex}>
                <div><TwitterIcon fontSize="large" /> <FacebookIcon fontSize="large"  /></div>
                <div>
                    <h3 className={styles.h3Class}>© 3021 MAKEMYTRIP PVT. LTD.</h3>
                    <h4 className={styles.h4Class}>Country India USA UAE</h4>
                </div>
            </div>
            
        </div>
    )
}

export {HomePageFooter}
