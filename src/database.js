//const mongoose = require('mongoose');
//mongoose.connect(process.env.MONGODB_URI, {
//mongoose.connect('mongodb+srv://narajeff:<nodegood*>@cluster0.ymqt7.mongodb.net/test',{
//mongoose.connect('mongodb://127.0.0.1:27017/notes-db-app', {
 //mongoose.connect('mongodb+srv://<sathyanarayanajiki@gmail.com>:<nodegood*>@cluster0.ymqt7.mongodb.net/?retryWrites=true&w=majority/notes-db-app',{
//        useCreateIndex: true,
//        useNewUrlParser: true,
//        useFindAndModify: false,
//        useUnifiedTopology: true
//    })
//    .then(db => console.log('DB is conected'))
//    .catch(err => console.error(err));

const mongoose = require('mongoose');
// Carga las variables de entorno desde el archivo .env
require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    throw new Error('La variable de entorno MONGODB_URI no está definida.');
}

// Conexión a la base de datos (ya no se necesitan las opciones antiguas)
mongoose.connect(MONGODB_URI)
    .then(db => console.log('✅ Base de datos conectada exitosamente.'))
    .catch(err => console.error('❌ Error al conectar la base de datos:', err));

