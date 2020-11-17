const Joi = require('joi');

const TaskSchema = Joi.object({
    task: Joi.string().required().min(4).max(10),
    date:Joi.date().required().min().max(20)
  });

module.exports = TaskSchema;