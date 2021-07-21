const mongoose = require('mongoose')

const busSchema = new mongoose.Schema({
    operatorId:{type:mongoose.Schema.Types.ObjectId,ref:'operator',required:true},
    bus_types:{type:String,required:true},
    seat_left:{type:Number,required:true},
    window_seat:{type:Number,required:true},
    rating:{type:Number,required:true},
    time_departure:{type:String,required:true},
    total_time:{type:String,required:true},
    time_arrival:{type:String,required:true},
    fromId:{type:mongoose.Schema.Types.ObjectId,ref:"from",required:true},
    toId:{type:mongoose.Schema.Types.ObjectId,ref:"to",required:true}
},{
    versionKey:false,
    timestamps:true
})

module.exports = mongoose.model('bus',busSchema)