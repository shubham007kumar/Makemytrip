const express = require('express')
const router = express.Router()

const Bus = require('../Model/bus.model')

router.post('/',async(req,res) => {
    try{
        const bus = await Bus.create(req.body)
    
        return res.status(201).json({data:bus})
    }catch(e){
        return res.status(400).send(e.message)
    }    
})

router.get('/',async(req,res) => {
    try{
        const bus = await Bus.find().populate('operatorId',{name_operator:1,_id:0}).populate({path:'fromId',select:'from'}).lean().exec()

        return res.status(200).json({data:bus})
    }catch(e){
        return res.status(400).send(e.message)
    }    
})


module.exports = router