
import React from 'react';
import styles from "./AboveFooterSection.module.css"

const AboveFooterSection = () => {
    return (
        <div className={styles.mainDivGrid}>
            <div className={styles.individualGrid}>
                <h2>Why MakeMyTrip for Bus Booking?</h2>
                <p>The leading player in online Bus bookings in India, MakeMyTrip offers lowest fares, exclusive discounts and a seamless online booking experience. Desktop or mobile site is a delightfully customer friendly experience, and with just a few clicks you can complete your booking.</p>
            </div>

            <div className={styles.individualGrid}>
                <h2>Booking Bus Ticket with MakeMyTrip</h2>
                <p>With more than 12,000 bus routes spread across India and integration with over 1300 bus operators, MakeMyTrip's online bus reservation system is simpler and smarter. It provides you a wide range of facilities, right from choosing your pickup point to your preferred choice of seat (for instance, luxury buses with sleeper berths). You can also choose from the widest range of available buses like Mercedes, Volvo, Volvo AC, AC luxury, Deluxe, Sleeper, Express and other private buses. The payment options are easier too- you can use either debit/credit card facility or net-banking. Not just that, in case of any change in your travel plan, bus tickets can be cancelled online. So, next time you need not stand in long queues or search at different bus ticket counters. You can directly book bus tickets online with MakeMyTrip.com and stay assured.</p>
           </div>

           <div className={styles.individualGrid}>
                <h2>Bus Tickets Online</h2>
                <p>MakeMyTrip is India's leading player for Bus bookings. With the cheapest fare guarantee, experience great value at the lowest price. Instant notifications ensure current bus schedule, instant fare drops, amazing discounts, instant refunds and rebook options, price, Operator reviews and many more interesting features.</p>
          </div>
            
        </div>
    )
}

export {AboveFooterSection}
