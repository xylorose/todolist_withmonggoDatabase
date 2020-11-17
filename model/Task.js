const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TaskSchema = Schema({
  task: { type: String, required: true },
  date: {type: Date, required:true}
});

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;