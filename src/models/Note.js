const { Schema, model } = require("mongoose");

const NoteSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    cantestu: {
        type: String,
        required: true
    },
    materia: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    aula: {
        type: String,
        required: true
    },
    hora: {
        type: String,
        required: true
    },
    carrera: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = model("Note", NoteSchema);