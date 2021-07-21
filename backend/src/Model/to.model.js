const mongoose = require('mongoose')

const toSchema = new mongoose.Schema({
    to:{type:String,required:true},
    droppoint:{type:mongoose.Schema.Types.ObjectId,ref:'drop'}
})

module.exports = model('to',toSchema)