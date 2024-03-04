const mongoose = require('mongoose')
const postSchema = new mongoose.Schema({
    title: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    body:{
        type:String
    }  
}, {
    timestamps: true
})
module.exports = mongoose.model('Post', postSchema)