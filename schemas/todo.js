const mongoose = require('mongoose');

const {Schema } = mongoose;
const todoSchema = new Schema({
  check: String,
  txt: {
    type: String,
    required: true,
  },
  createdAt:{
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Todo',todoSchema);