const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

const database = require("./services/database");
const taskRouter = require("./router/tasks");


database.connect();

app.use('/',taskRouter);

app.use(express.json());


app.listen(8000, console.log('Server running on port 8000'));