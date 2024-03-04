const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    userName:{
        type: mongoose.Schema.Types.String
    },
    email:{
        type:mongoose.Schema.Types.String
    },
    adress:{
        type:String
    },
    phone:{
        type:mongoose.Schema.Types.String
    }
}, {
    timestamps: true
})
module.exports = mongoose.model('User', userSchema)