import React from 'react';
import {Grid, Box} from "@material-ui/core";
import styles  from './BusesFromSection.module.css';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
   Box_Class: {
     padding:"2vw",
     borderRadius:"20px"
    },
  });

const BusesFromSection = () => {
    const classes = useStyles();
    return (
        <div>
            <Box boxShadow={3} className={classes.Box_Class} >
                <Grid container spacing={3} direction="row" columns="3" >
                    <Grid item lg={4} md={6} xs={12}>
                        <div className={styles.paper_flex}>
                                <div> <img className={styles.circular_img_Class} alt="Bangalore" src="https://promos.makemytrip.com/store/BangaloreDT.JPG"/></div>
                                
                                <div className={styles.inside_Individual_Paper_Flex}>
                                    <h2 className={styles.h2_Class}>Buses From Bangalore To</h2>
                                    <h3 className={styles.h3_Class}>Chennai, Hyderabad, Coimbatore, Mumbai, Goa</h3>
                                </div>
                        </div>
                    </Grid>

                    <Grid item lg={4} md={6} xs={12}>
                        <div className={styles.paper_flex}>
                                <div> <img className={styles.circular_img_Class} alt="Chennai" src="https://promos.makemytrip.com/images/50x50-Other-23052019.png"/></div>
                                
                                <div className={styles.inside_Individual_Paper_Flex}>
                                    <h2 className={styles.h2_Class}>Buses From Chennai To</h2>
                                    <h3 className={styles.h3_Class}>Bangalore, Coimbatore, Madurai, Hyderabad, Trichy</h3>
                                </div>
                        </div>
                    </Grid>

                    <Grid item lg={4} md={6} xs={12} >
                        <div className={styles.paper_flex}>
                                <div> <img className={styles.circular_img_Class} alt="Hyderabad" src="https://promos.makemytrip.com/images/50x50-Ooty-23052019.png"/></div>
                                
                                <div className={styles.inside_Individual_Paper_Flex}>
                                    <h2 className={styles.h2_Class}>Buses From Hyderabad To</h2>
                                    <h3 className={styles.h3_Class}>Bangalore, Chennai, Mumbai, Pune, Vijayawada</h3>
                                </div>
                        </div>
                    </Grid>

                    <Grid item lg={4} md={6} xs={12} >
                        <div className={styles.paper_flex}>
                                <div> <img className={styles.circular_img_Class} alt="Pune" src="https://promos.makemytrip.com/store/PuneDT.JPG"/></div>
                                
                                <div className={styles.inside_Individual_Paper_Flex}>
                                    <h2 className={styles.h2_Class}>Buses From Pune To</h2>
                                    <h3 className={styles.h3_Class}>Goa, Bangalore, Nagpur, Hyderabad, Mumbai</h3>
                                </div>
                        </div>
                    </Grid>

                    <Grid item lg={4} md={6} xs={12} >
                        <div className={styles.paper_flex}>
                                <div> <img className={styles.circular_img_Class} alt="Delhi" src="https://promos.makemytrip.com/store/DelhiDT.JPG"/></div>
                                
                                <div className={styles.inside_Individual_Paper_Flex}>
                                    <h2 className={styles.h2_Class}>Buses From Delhi To</h2>
                                    <h3 className={styles.h3_Class}>Lucknow, Dehradun, Manali, Kanpur, Jaipur</h3>
                                </div>
                        </div>
                    </Grid>

                    <Grid item lg={4} md={6} xs={12}>
                        <div className={styles.paper_flex}>
                                <div> <img className={styles.circular_img_Class} alt="Mumbai" src="https://promos.makemytrip.com/store/MumbaiDT.JPG"/></div>
                                
                                <div className={styles.inside_Individual_Paper_Flex}>
                                    <h2 className={styles.h2_Class}>Buses From Mumbai To</h2>
                                    <h3 className={styles.h3_Class}>Bangalore, Goa, Pune, Indore, Ahmedabad</h3>
                                </div>
                        </div>
                    </Grid>
                    
                    <Grid item lg={4} md={6} xs={12}>
                        <div className={styles.paper_flex}>
                                <div> <img className={styles.circular_img_Class} alt="Ahmedabad" src="https://promos.makemytrip.com/store/JaipurDT.JPG"/></div>
                                
                                <div className={styles.inside_Individual_Paper_Flex}>
                                    <h2 className={styles.h2_Class}>Buses From Ahmedabad To</h2>
                                    <h3 className={styles.h3_Class}>Mumbai, Rajkot, Surat, Pune, Indore</h3>
                                </div>
                        </div>
                    </Grid>

                    <Grid item lg={4} md={6} xs={12}>
                        <div className={styles.paper_flex}>
                                <div> <img className={styles.circular_img_Class} alt="Coimbatore" src="https://promos.makemytrip.com/images/50x50-Ooty-23052019.png"/></div>
                                
                                <div className={styles.inside_Individual_Paper_Flex}>
                                    <h2 className={styles.h2_Class}>Buses From Coimbatore To</h2>
                                    <h3 className={styles.h3_Class}>Chennai, Bangalore, Madurai, Pondicherry, Nagercoil</h3>
                                </div>
                        </div>
                    </Grid>

                   

                    <Grid item lg={4} md={6} xs={12}>
                        <div className={styles.paper_flex}>
                                <div> <img className={styles.circular_img_Class} alt="Kolkata" src="https://promos.makemytrip.com/store/SingaporeDT.JPG"/></div>
                                
                                <div className={styles.inside_Individual_Paper_Flex}>
                                    <h2 className={styles.h2_Class}>Buses From Kolkata To</h2>
                                    <h3 className={styles.h3_Class}>Durgapur, Asansol, Siliguri, Bhubaneshwar, Bardhaman</h3>
                                </div>
                        </div>
                    </Grid>
                    

                        
                   
                </Grid>

            </Box>
            
        </div>
    )
}

export  {BusesFromSection}
