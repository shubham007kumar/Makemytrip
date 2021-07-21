const {model,Schema} = require('mongoose')

const dropSchema = new Schema({
    drop:[{type:String,required:true}]
})

module.exports = model('drop',dropSchema)