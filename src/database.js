const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, {
//mongoose.connect('mongodb+srv://narajeff:<nodegood*>@cluster0.ymqt7.mongodb.net/test',{
//mongoose.connect('mongodb://127.0.0.1:27017/notes-db-app', {
 //mongoose.connect('mongodb+srv://<sathyanarayanajiki@gmail.com>:<nodegood*>@cluster0.ymqt7.mongodb.net/?retryWrites=true&w=majority/notes-db-app',{
        useCreateIndex: true,
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
    .then(db => console.log('DB is conected'))
    .catch(err => console.error(err));

