const express = require('express')
const connect = require('./Config/db')
const PORT = process.env.PORT || 8080

const app = express()
app.use(express.json())
 
//-----------------CRUD operation on travel operator---------------
const operatorController = require('./Controller/operator.controller')
app.use('/operator',operatorController)

//-----------------CRUD operation on origin-------------------------


app.listen(PORT, async () =>{
    await connect()
    console.log(`Server started at ${PORT} Port`)
})