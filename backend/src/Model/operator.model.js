const { model,Schema } = require('mongoose')

const operatorSchema = new Schema({
  name_operator:{type:String,required:true},
  bus_types:{type:String,required:true},
  seat_left:{type:Number,required:true},
  window_seat:{type:Number,required:true},
  rating:{type:Number,required:true},
  time_departure:{type:String,required:true},
  total_time:{type:String,required:true},
  time_arrival:{type:String,required:true}
},{
    versionKey:false,
    timestamps:true
})

module.exports = model('operator',operatorSchema)