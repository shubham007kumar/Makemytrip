const {model,Schema} = require('mongoose')

const dropSchema = new Schema({
    drop:[{type:Object,required:true}]
})

module.exports = model('drop',dropSchema)