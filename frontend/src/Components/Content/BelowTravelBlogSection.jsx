import React from 'react';
import {Box} from "@material-ui/core";
import styles  from './BelowTravelBlogSection.module.css';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from "react-router-dom"
const useStyles = makeStyles({
    Link_Box_Class: {
        display:"flex",
        flexDirection:"column",
        textAlign:"left",
       
     
     },
     main_Box_class:{
         display:"flex",
         flexDirection:"row",
         gap:"5px",
         justifyContent:"space-between"
     }
   });

const BelowTravelBlogSection = () => {
    const classes = useStyles();
    return (
    <div className={styles.mainDiv}>
        <Box className={classes.main_Box_class}>
            
                <Box className={classes.Link_Box_Class}>
                    <Link style={{fontWeight:"bolder",marginBottom:"1vh",fontSize:"12px"}} className={styles.link_class}>PRODUCT OFFERING</Link> 
                    <Link className={styles.link_class}>Flights</Link>
                    <Link className={styles.link_class}>International Flights</Link>   
                    <Link className={styles.link_class}>Charter Flights</Link> 
                    <Link className={styles.link_class}>Hotels</Link> 
                    <Link className={styles.link_class}>International Hotels</Link>    
                    <Link className={styles.link_class}>Homestays and Villas</Link>    
                    <Link className={styles.link_class}>Activities</Link>    
                    <Link className={styles.link_class}>Holidays In India</Link>    
                    <Link className={styles.link_class}>International Holidays</Link>    
                    <Link className={styles.link_class}>Book Hotels From UAE</Link>    
                    <Link className={styles.link_class}>myBiz for SME Travel</Link>    
                    <Link className={styles.link_class}>Book Online Cabs</Link>    
                    <Link className={styles.link_class}>Book Bus Tickets</Link>    
                    <Link className={styles.link_class}>Book Train Tickets</Link>    
                    <Link className={styles.link_class}>Vande Bharat Mission Flights</Link>    
                    <Link className={styles.link_class}>Air Bubble Flights</Link>    
                    <Link className={styles.link_class}>Cheap Tickets to India</Link>    
                    <Link className={styles.link_class}>Book Flights From US</Link>    
                    <Link className={styles.link_class}>Book Flights From UAE</Link>    
                    <Link className={styles.link_class}>Trip Planner</Link>    
                    <Link className={styles.link_class}>Gift Cards</Link>    
                    <Link className={styles.link_class}>Travel Blog</Link>    
                </Box>
           

           
                <Box className={classes.Link_Box_Class}>
                    <Link style={{fontWeight:"bolder",marginBottom:"1vh",fontSize:"12px"}} className={styles.link_class}>MAKEMYTRIP</Link> 
                    <Link className={styles.link_class}>About Us</Link>
                    <Link className={styles.link_class}>Investor Relations</Link>   
                    <Link className={styles.link_class}>Careers</Link> 
                    <Link className={styles.link_class}>Corporate Travel</Link> 
                    <Link className={styles.link_class}>MMT Foundation</Link>    
                    <Link className={styles.link_class}>CSR Policy</Link>    
                    <Link className={styles.link_class}>myPartner - Travel Agent Portal</Link>    
                    <Link className={styles.link_class}>Foreign Exchange</Link>    
                    <Link className={styles.link_class}>List your hotel</Link>    
                    <Link className={styles.link_class}>Partners- Redbus</Link>    
                    <Link className={styles.link_class}>Partners- Goibibo</Link>    
                       
                </Box>
           

          
                <Box className={classes.Link_Box_Class}>
                    <Link style={{fontWeight:"bolder",marginBottom:"1vh",fontSize:"12px"}} className={styles.link_class}>ABOUT THE SITE</Link> 
                    <Link className={styles.link_class}>Contact Us</Link>
                    <Link className={styles.link_class}>Payment Security</Link>   
                    <Link className={styles.link_class}>User Agreement</Link> 
                    <Link className={styles.link_class}>Terms of Service</Link> 
                    <Link className={styles.link_class}>More Offices</Link>    
                    <Link className={styles.link_class}>Make A Payment</Link>    
                    <Link className={styles.link_class}>Work From Home</Link>                                      
                </Box>
           

           
                <Box className={classes.Link_Box_Class}>
                    <Link style={{fontWeight:"bolder",marginBottom:"1vh",fontSize:"12px"}} className={styles.link_class}>IMPORTANT LINKS</Link> 
                    <Link className={styles.link_class}>APSTRC</Link>
                    <Link className={styles.link_class}>KPN Travels</Link>   
                    <Link className={styles.link_class}>VRL Travels</Link> 
                    <Link className={styles.link_class}>S R M Travels</Link> 
                    <Link className={styles.link_class}>Kallada Travels</Link>    
                    <Link className={styles.link_class}>Kaveri Travels</Link>    
                    <Link className={styles.link_class}>Hans Travels</Link>    
                    <Link className={styles.link_class}>Eagle Travels</Link>    
                    <Link className={styles.link_class}>SVR TRAVELS</Link>    
                    <Link className={styles.link_class}>Pune Nagpur bus</Link>    
                    <Link className={styles.link_class}>Pune Mumbai bus</Link>
                    <Link className={styles.link_class}>Pune Bangalore bus</Link>
                    <Link className={styles.link_class}>Mumbai Bangalore bus</Link>    
                    <Link className={styles.link_class}>Pune Goa bus</Link>
                    <Link className={styles.link_class}>Indore Bhopal bus</Link>
                    <Link className={styles.link_class}>Mumbai Shirdi bus</Link>
                </Box>
           
                <Box className={classes.Link_Box_Class}>
                    <Link style={{fontWeight:"bolder",marginBottom:"1vh",fontSize:"12px"}} className={styles.link_class}>QUICK LINKS</Link> 
                    <Link className={styles.link_class}>Delhi Bus Services</Link>
                    <Link className={styles.link_class}> Bangalore Buses</Link>   
                    <Link className={styles.link_class}>Chennai Buses</Link> 
                    <Link className={styles.link_class}>Parveen Travels</Link> 
                    <Link className={styles.link_class}>SRM Travels</Link>    
                    <Link className={styles.link_class}>RSRTC Online Booking</Link>    
                    <Link className={styles.link_class}>Bangalore Hyderabad Bus</Link>    
                    <Link className={styles.link_class}>Chennai Bangalore Bus</Link>    
                    <Link className={styles.link_class}>Mumbai Pune Bus</Link>    
                    <Link className={styles.link_class}>Mumbai Goa Buses</Link>    
                    <Link className={styles.link_class}>Delhi Manali Bus</Link>
                    <Link className={styles.link_class}>Bus Service</Link>
                    <Link className={styles.link_class}>Bus Rss Feed</Link>   
                </Box>
                                                       
                                                       
                                                        
                                                        
                                                        
                                                        
                                                        
           

            
                
           
        </Box>
    </div>
        
    )
}

export {BelowTravelBlogSection}
