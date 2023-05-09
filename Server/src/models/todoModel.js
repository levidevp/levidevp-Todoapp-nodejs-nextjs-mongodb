var mongoose = require("mongoose")
const todoSchema = new mongoose.Schema({
  input: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const Todocollection = mongoose.model('Todo', todoSchema);
module.exports = Todocollection