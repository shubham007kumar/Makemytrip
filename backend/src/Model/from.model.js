const mongoose = require('mongoose')

const fromSchema = new mongoose.Schema({
    from:{type:String,required:true},
    boardpoint:{type:mongoose.Schema.Types.ObjectId,ref:'board'}
})

module.exports = model('from',fromSchema)