const mongoose = require('mongoose')

const toSchema = new mongoose.Schema({
    to:{type:String,required:true},
    droppoint:{type:mongoose.Schema.Types.ObjectId,ref:'drop'}
},{
    versionKey:false,
    timestamps:true
})

module.exports = mongoose.model('to',toSchema)