const express = require('express')
const connect = require('./Config/db')
const PORT = process.env.PORT || 8080

const app = express()
app.use(express.json())
 
//-----------------CRUD operation on operator Schema ---------------
const operatorController = require('./Controller/operator.controller')
app.use('/operator',operatorController)

//-----------------CRUD operation on boarding Schema ----------------
const boardController = require('./Controller/boarding.controller')
app.use('/board',boardController)

//-----------------CRUD operation on drop Schema ----------------
const dropController = require('./Controller/drop.controller')
app.use('/drop',dropController)

//-----------------CRUD operation on from Schema ----------------
const fromController = require('./Controller/from.controller')
app.use('/from',fromController)

//-----------------CRUD operation on to Schema ----------------
const toController = require('./Controller/to.controller')
app.use('/to',toController)


//-----------------CRUD operation on bus Schema ----------------
const busController = require('./Controller/bus.controller')
app.use('/bus',busController)

//Booking Controller
const bookingController = require("./Controller/booking.controller")
app.use("/bookings", bookingController)

//Customers Controller
const customerController = require("./Controller/customer.controller")
app.use("/customers", customerController)

app.listen(PORT, async () => {
    await connect()
    console.log(`Server started at ${PORT} Port`)
})