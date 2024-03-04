const mongoose = require('mongoose')
const todosSchema = new mongoose.Schema({
    title: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false
    },
    tags:{
        type:[String]
    },
  
}, {
    timestamps: true
})
module.exports = mongoose.model('Todo', todosSchema)