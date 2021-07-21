const mongoose = require('mongoose');

const connect = () => {
    return mongoose.connect('mongodb+srv://shubham:test@cluster0.zhwr1.mongodb.net/Makemytrip?retryWrites=true&w=majority',{
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useFindAndModify: false
    });
}

module.exports = connect