const {model,Schema} = require('mongoose')

const boardSchema = new Schema({
    board:[{type:Object,required:true}]
},{
    versionKey:false,
    timestamps:true
})

module.exports = model('board',boardSchema)