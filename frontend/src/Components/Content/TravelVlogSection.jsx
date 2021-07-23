import React from 'react';
import {Box} from "@material-ui/core";
import styles  from './TravelVlogSection.module.css';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    Main_Box_Class: {
      padding:"2vw",
      borderRadius:"20px",
      marginTop:"1vh",
      display:"flex",
      flexDirection:"row",
      gap:"1vw",
      flexWrap:"wrap"
     },
     Secondary_Boxes:{
        width:"20vw",

     }
   });

const TravelVlogSection = () => {
    const classes = useStyles();
    return (
        <Box  boxShadow={3}>
                <h1 className={styles.travelblogh1}>Travel Blog</h1>
            <Box className={classes.Main_Box_Class}>
                    <Box boxShadow={3} className={classes.Secondary_Boxes}>
                        <img className={styles.travelvlog_img_class} alt="Charter" src="https://seoimgak.mmtcdn.com/blog/sites/default/files/hero2_28charter_1.jpg?6Aw5c27vU4CZHFxUGqPGmRfFhJZWkXek"/>
                        <p className={styles.travelvlog_para}>#FlyLikeAStar with MakeMyTrip’s New Charter Flight Service!</p>
                    </Box>

                    <Box boxShadow={3} className={classes.Secondary_Boxes}>
                        <img className={styles.travelvlog_img_class} alt="Trip" src="https://seoimgak.mmtcdn.com/blog/sites/default/files/hero_562.jpg?hncoThn_5OqPcZRrgDR6YqsA9qQTM8TH"/>
                        <p className={styles.travelvlog_para}>6 Things to Do on a Business Trip!</p>
                    </Box>

                    <Box boxShadow={3} className={classes.Secondary_Boxes}>
                        <img className={styles.travelvlog_img_class} alt="Guidelines" src="https://seoimgak.mmtcdn.com/blog/sites/default/files/book-an-international-flights_0.jpg?ZXnoPWso01qBtd7QnC7zWWUQ6DEulQjg"/>
                        <p className={styles.travelvlog_para}>Your One-Stop Resource For Country-Wise Travel Guidelines!</p>
                    </Box>
                    <Box boxShadow={3} className={classes.Secondary_Boxes}>
                        <img className={styles.travelvlog_img_class} alt="Insurance" src="https://seoimgak.mmtcdn.com/blog/sites/default/files/hero2_28charter_1.jpg?6Aw5c27vU4CZHFxUGqPGmRfFhJZWkXek"/>
                        <p className={styles.travelvlog_para}>Protect Yourself with MakeMyTrip’s Special COVID-19 Insurance Policy!</p>
                    </Box>
            </Box>
    </Box>
        
    )
}

export {TravelVlogSection}
