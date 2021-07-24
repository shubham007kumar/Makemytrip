import React,{useState} from "react";
import { Container, Div1, Div2, Div3, Div4, Div5, Div8, Div9, Divs, Sub2, Subcontainer } from "./paymentStyle";
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import styles from './pay.module.css'
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { store } from 'react-notifications-component';  

const intivalue={
    name:'',
    number:'',
    month:'',
    year:'',
    cvc :''
  }

export const Payment = () => {
    const [query,setQuery]=useState(intivalue)
    const {name,number,month,year,cvc}=query

    const handleChange=(e)=>{
        const {name,value}=e.target
        setQuery({...query,[name]:value})
      }
    const handlePayment=()=>{
        store.addNotification({
            title:"",
            message:"Bus book",
            type:"success",
            container:"bottom-center",
            animationIn:["animated","fadeIn"],
            animationOut:["animated","fadeout"],
            dismiss:{
              duration:2000
            },
            width:150
           })
    }
  return (
    <div style={{background:"#ffc4ff",height:"100vh"}}>
     <div className={styles.notification}> <ReactNotification/></div> 
           <Div1>
             <div>
             <img src="https://imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/header/mmtLogoWhite.png" alt="blank" style={{width:"70px"}} />
             </div>
            <p><span style={{color:"#fff",fontWeight:"bold"}}>Hey,</span> You are viewing this booking at the best price</p>
          </Div1>
      <Container>
        <Subcontainer>
          <Div2>
            <div>
            <p>Get additional discount</p>
            <p>Login to access payment and discount</p>
            </div>
            <p className="btn">Login</p>
          </Div2>
          <Div3>
              <Div5>
                <h3>Payment options</h3>
                <Div4>
                  <AccountBalanceIcon/>
                  <p>Net Banking</p>
                </Div4>
                <Div4>
                  <CreditCardIcon/>
                  <p>Credit Card</p>
                </Div4>
                <Div4>
                  <AccountBalanceWalletIcon/>
                  <p>PayLater</p>
                </Div4>
              </Div5>
              <div className={styles.container2}>
                <p className={styles.payment}>Payment Detail</p>
                <label className={styles.label}>CARDHOLDER NAME<br/>
                <input 
                className={styles.input}
                name="name"
                value={name}
                onChange={handleChange}
                type="text"
                placeholder="John Smith"
                />
                </label><br/>
                <label className={styles.label}>CARD NUMBER<br/>
                <input
                className={styles.input}
                name="number"
                value={number}
                onChange={handleChange} 
                type="text"
                placeholder="1234 1234 1234 1234"
                />
                </label><br/>
                <div className={styles.subcontainer}>
                <label  className={styles.label}>EXPIRY MONTH<br/>
                <input 
                name="month"
                className={styles.input2}
                value={month}
                onChange={handleChange}
                type="text"
                placeholder="09"
                />
                </label>
                <label  className={styles.label}>EXPIRY YEAR<br/>
                <input 
                className={styles.input2}
                name="year"
                value={year}
                onChange={handleChange}
                type="text"
                placeholder="2021"
                />
                </label>
                <label  className={styles.label}>CVC<br/>
                <input 
                name="cvc"
                className={styles.input2}
                value={cvc}
                onChange={handleChange}
                type="text"
                placeholder="123"
                />
                </label>
            </div>
            <input type="submit" value="PAY" onClick={handlePayment} className={styles.button} />
            </div>
          </Div3>
        </Subcontainer>
        <Sub2>
        <h3>Fare Summary</h3>
         <Div8>
             <p>Base Fare</p>
             <p>Rs. 2000</p>
        </Div8>  
        <Div9>
            <p>Other</p>
            <p>Rs.100</p>
        </Div9>
        <hr/>
        <Divs>
            <h3>Total Due</h3>
            <p>Rs. 2100</p>
        </Divs>
        </Sub2>
      </Container>
    </div>
  );
};
