const {model,Schema} = require('mongoose')

const boardSchema = new Schema({
    board:[{type:String,required:true}]
})

module.exports = model('board',boardSchema)