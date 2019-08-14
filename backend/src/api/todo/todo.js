const restuful = require('node-restful')
const mongoose = restuful.mongoose

const todoSchema = new mongoose.Schema({
    description: {type: String, requires: true},
    done: {type: Boolean, required: true, default: false},
    createAt: {type: Date, default: Date.now}
})

module.exports = restuful.model('Todo', todoSchema)