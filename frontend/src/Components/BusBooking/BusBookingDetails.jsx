import React from 'react';
import styles from './BusBookingDetails.module.css'

import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateBookingDetails } from "../../Redux/Booking/action";

function BusBookingDetails() {


    const seatsArray = useSelector((state) => state.Booking.seats);

    var passengerArray = [];
    for (var ele = 0; ele < 2; ele++) {
        passengerArray.push({
            name: "",
            age: "",
            gender: "",
        });
    }

    const [passDetails, setPassDetails] = React.useState(passengerArray);
    const [passEmail, setPassEmail] = React.useState("");
    const [passMobileNo, setPassMobileNo] = React.useState("");
    const [passInsurance, setPassInsurance] = React.useState(false);

    let history = useHistory();
    let dispatch = useDispatch();
    const handleProceedToPay = () => {
        const payload1 = {
            key: "passengerDetails",
            value: passDetails,
        };

        const payload2 = {
            key: "email",
            value: passEmail,
        };

        const payload3 = {
            key: "phoneNumber",
            value: passMobileNo,
        };


        const payload4 = {
            key: "isInsurance",
            value: passInsurance,
        };


        dispatch(updateBookingDetails(payload1));
        dispatch(updateBookingDetails(payload2));
        dispatch(updateBookingDetails(payload3));
        dispatch(updateBookingDetails(payload4));

        history.push("/payment-page");
    };

    const handlePassName = (e, indexNo) => {
        const newArr = [...passDetails];
        newArr[indexNo]["name"] = e.target.value;
        setPassDetails(newArr);
    };

    const handlePassAge = (e, indexNo) => {
        const newArr = [...passDetails];
        newArr[indexNo]["age"] = e.target.value;
        setPassDetails(newArr);
    };

    const handlePassGender = (e, indexNo) => {
        const newArr = [...passDetails];
        newArr[indexNo]["gender"] = e.target.value;
        setPassDetails(newArr);
    };

    console.log(
        passDetails,
        passMobileNo,
        passEmail,
        passInsurance
    );


    return (

        <div className={styles.bookingContDetails}>

            <div className={styles.bookingCont}>


                <h3>Enter Traveller Details</h3>

                <div className={styles.passDetailsCont}>
                    {[1, 2].map((seatNo, index) => {
                        return (
                            <div className={styles.passDetailsEachCont}>

                                <h4 style={{ marginBottom: "2vh", color: "gray" }}>
                                    <span>Seat {seatNo}</span>
                                </h4>


                                <div className={styles.passDetailsEachContDetails}>

                                    <div>
                                        <div style={{ marginLeft: "10px" }}>Name</div>
                                        <input
                                            style={{ width: "300px" }}
                                            className={styles.allInputBlocks}
                                            placeholder="Name"
                                            type="text"
                                            name="name"
                                            value={passDetails[index]["name"]}
                                            onChange={(e) => handlePassName(e, index)}
                                        />
                                    </div>


                                    <div>
                                        <div style={{ marginLeft: "10px" }}>Age</div>
                                        <input
                                            style={{ width: "100px" }}
                                            className={styles.allInputBlocks}
                                            placeholder="Age"
                                            type="text"
                                            name="age"
                                            value={passDetails[index]["age"]}
                                            onChange={(e) => handlePassAge(e, index)}
                                        />


                                    </div>



                                    <div>
                                        <div style={{ marginLeft: "10px" }}>Gender</div>
                                        <div
                                            onChange={(e) => handlePassGender(e, index)}
                                        >

                                            <select
                                                className={styles.allInputBlocks}
                                                name={"gender" + index}>
                                                <option value="Male">
                                                    Male
                                                </option>

                                                <option value="Female">
                                                    Female
                                                </option>
                                            </select>

                                        </div>
                                    </div>



                                </div>

                            </div>
                        );
                    })}
                </div>


                <div>

                    <h3> Enter Contact Details</h3>

                    <div className={styles.passDetailsEachContDetails}>

                        <div>
                            <div style={{ marginLeft: "10px" }}>Email</div>
                            <input
                                className={styles.allInputBlocks}
                                placeholder="Email"
                                type="email"
                                name="email"
                                value={passEmail}
                                onChange={(e) => setPassEmail(e.target.value)}
                            />
                        </div>

                        <div>
                            <div style={{ marginLeft: "10px" }}>Mobile Number</div>
                            <div>

                                <input
                                    className={styles.allInputBlocks}
                                    placeholder="Phone"
                                    type="number"
                                    name="phone"
                                    value={passMobileNo}
                                    onChange={(e) => setPassMobileNo(e.target.value)}
                                />
                            </div>

                        </div>



                    </div>

                </div>



                <div style={{ marginBottom: "50px", marginTop: "50px" }}>


                    <h3>Trip Insurance</h3>

                    <div style={{
                        height: "30vh",
                        boxShadow: "1px 1px 6px 4px rgba(221, 221, 221, 0.596)",
                        backgroundColor: "#FFFAF2",
                        padding: "20px 10px",
                        border: "5px"
                    }}>

                        <div style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                            <div style={{
                                width: "45%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <div>
                                    Secure your trip<br />
                                    See all the benefits you get for just ₹15
                                </div>
                                <img src="https://jsak.mmtcdn.com/bus_cdn_dt/static/media/ackoLogo.a675222a.png" alt="acko" style={{ width: "25%" }} />
                            </div>


                            <div style={{
                                width: "55%",
                                display: "flex",
                                justifyContent: "center",
                                textAlign: "center"
                            }}
                            >
                                <div style={{
                                    width: "30%",
                                    margin: "5px",
                                    border: "1px solid rgba(221, 221, 221, 0.596)",
                                    backgroundColor: "white"
                                }}>
                                    <h4>Loss of Baggage</h4>
                                    <hr />
                                    <span>Claim upto</span>
                                    <div>₹ 5,000</div>
                                </div>


                                <div style={{
                                    width: "30%",
                                    margin: "5px",
                                    border: "1px solid rgba(221, 221, 221, 0.596)",
                                    backgroundColor: "white"
                                }}>
                                    <h4>Hospitalization</h4>
                                    <hr />
                                    <span>Claim upto</span>
                                    <div>₹ 75,000</div>
                                </div>


                                <div style={{
                                    width: "30%",
                                    margin: "5px",
                                    border: "1px solid rgba(221, 221, 221, 0.596)",
                                    backgroundColor: "white"
                                }}>
                                    <h4>Personal Accident</h4>
                                    <hr />
                                    <span>Claim upto</span>
                                    <div>₹ 6,00,000</div>
                                </div>
                            </div>

                        </div>


                        <br />
                        <br />
                        <br />

                        <div style={{ display: "flex" }}>
                            <input
                                type="checkbox"
                                checked={passInsurance}
                                onChange={(e) => setPassInsurance(e.target.checked)}
                            />
                            <div>
                                Yes, secure my trip. I agree to the Terms and Conditions
                            </div>
                        </div>


                    </div>

                </div>


                <div>

                    <h3>Acknowledgement</h3>

                    <div style={{
                        boxShadow: "1px 1px 6px 4px rgba(221, 221, 221, 0.596)",

                        padding: "20px 10px",
                        border: "5px",
                        fontWeight: "600",
                    }}>
                        By proceeding, I agree to MakeMyTrip's <span style={{ color: "#196FF6" }}>User Agreement</span> , <span style={{ color: "#196FF6" }}>Terms of Service</span>  and <span style={{ color: "#196FF6" }}> Privacy Policy</span> .
                    </div>

                </div>




            </div>




            <div className={styles.proceedToPayment}>
                <input
                    className={styles.proceed_to_button}
                    type="submit"
                    value="CONTINUE TO BOOK NOW"
                    onClick={handleProceedToPay}
                />
            </div>


        </div>




    )

}

export { BusBookingDetails }