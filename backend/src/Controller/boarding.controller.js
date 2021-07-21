const express = require('express')
const router = express.Router()

const Board = require('../Model/boarding.model')

router.post('/',async(req,res) => {
    try{
        const board = await Board.create(req.body)
    
        return res.status(201).json({data:board})
    }catch(e){
        return res.status(400).send(e.message)
    }    
})

router.get('/',async(req,res) => {
    try{
        const board = await Board.find().lean().exec()

        return res.status(200).json({data:board})
    }catch(e){
        return res.status(400).send(e.message)
    }    
})


module.exports = router