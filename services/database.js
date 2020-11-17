const mongoose = require('mongoose');

const connectToDb = () => {
    mongoose
    .connect('mongodb://localhost:27017/task_db',{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    .then(()=>{
        console.log('Connected to Database');
    })
    .catch((err) => console.log(err));
}

module.exports= {
    connect: connectToDb,
};