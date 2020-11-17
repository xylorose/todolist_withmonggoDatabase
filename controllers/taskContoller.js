const { replaceOne } = require("../model/Task");
const Task = require("../model/Task");
const parseRequestBody = require("../utils/parseRequestBody");

const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    if (!tasks) {
      return res.status(400).json({
        error: "Error in getting task!",
      });
    }

    res.render('index',{
      data:tasks
    });
  } catch (e) {
    return res.status(400).json({
      error: e,
    });
  }
};

const getTaskById = async (req, res) => {
  try {
    const tasks = await Task.find({ _id: req.params.id });

    if (!tasks || tasks.length === 0) {
      return res.status(400).json({
        error: "Task not found!",
      });
    }

    res.status(200).json({
      tasks: tasks,
    });
  } catch (e) {
    return res.status(400).json({
      error: e,
    });
  }
};

const addTask = async (req, res) => {
  try {
    const task = {
      task: req.body.task,
      date: req.body.date,
    }
    const newTask = new Task(task);
    const result = await newTask.save();

    if (!result) {
      return res.status(400).json({
        error: "Error in adding new task!",
      });
    }
    
    res.status(200).redirect('/tasks');
  } catch (e) {
    return res.status(400).json({
      error: e,
    });
  }
};

const updateTaskById = async (req,res) => {
  const updates = parseRequestBody(req.body);
  console.log(updates)
  try {
      const tasks = await Task.updateOne({_id:req.params.id},{ $set: updates });
      console.log(req.params.id)
      if(!tasks) return res.status(400).send("Error in updating task by id");
      // res.render('index',{ 
      //     tasks: tasks
      // });
      res.redirect('/tasks')
  } catch (error) {
      res.status(500).send(error);
  }
}

const deleteTask = async (req, res) => {
  try {
    await Task.deleteOne({ _id: req.params.id }, (error, result) => {
      if (error) {
        return res.status(400).json({
          error: error,
        });
      }
    })
      res.status(200).redirect('/tasks')

  } catch (e) {
    return res.status(400).json({
      error: e,
    });
  }
};

module.exports = {
  getTasks,
  addTask,
  getTaskById,
  deleteTask,
  updateTaskById
};
