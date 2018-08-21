// this file will hold the schema. 
const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  day: { type: String, required: true },
  todoList: [],
})

module.exports = mongoose.model('todo', todoSchema);
