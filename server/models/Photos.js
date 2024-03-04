const mongoose = require('mongoose')
const photosSchema = new mongoose.Schema({
    title: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    imageUrl:{
        type:String,
    }
   
}, {
    timestamps: true
})
module.exports = mongoose.model('Photo', photosSchema)