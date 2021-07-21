const express = require('express')
const connect = require('./Config/db')
const PORT = process.env.PORT || 8080


const app = express()
app.use(express.json())


//Customers Controller
const customerController = require("./Controller/customer.controller")
app.use("/customers", customerController)

app.listen(PORT, async () => {
    await connect()
    console.log(`Server started at ${PORT} Port`)
})