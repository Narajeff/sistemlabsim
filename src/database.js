const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://<narajeff>:<narajeff>@cluster0.ymqt7.mongodb.net/?retryWrites=true&w=majority', {
///*//mongoose.connect('mongodb://localhost/notes-db-app', {*/
        useCreateIndex: true,
        useNewUrlParser: true,
        useFindAndModify: false
    })
    .then(db => console.log('DB is conected'))
    .catch(err => console.error(err));
