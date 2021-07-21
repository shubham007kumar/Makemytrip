const express = require('express')
const connect = require('./Config/db')
const PORT = process.env.PORT || 8080


const app = express()
app.use(express.json())

//Booking Controller
const bookingController = require("./Controller/booking.controller")
app.use("/bookings", bookingController)

app.listen(PORT, async () => {
    await connect()
    console.log(`Server started at ${PORT} Port`)
})