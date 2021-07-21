const express = require('express')
const router = express.Router()

const Drop = require('../Model/drop.model')

router.post('/',async(req,res) => {
    try{
        const drop = await Drop.create(req.body)

        return res.status(201).json({data:drop})
    }catch(e){
        return res.status(400).send(e.message)
    }    
})

router.get('/',async(req,res) => {
    try{
        const drop = await Drop.find().lean().exec()

        return res.status(200).json({data:drop})
    }catch(e){
        return res.status(400).send(e.message)
    }    
})


module.exports = router