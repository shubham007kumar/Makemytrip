const express = require('express')
express.Router()

const {googlelogin} = require('../Controller/auth')

router.post("/googlelogin", googlelogin)