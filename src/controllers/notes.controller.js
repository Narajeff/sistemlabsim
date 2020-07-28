const notesCtrl = {};

// Models
const Note = require("../models/Note");

notesCtrl.renderNoteForm = (req, res) => {
    res.render("notes/new-note");
};

notesCtrl.createNewNote = async(req, res) => {
    const { docente, cantestu, materia, fecha, aula, hora, carrera } = req.body;
    const errors = [];
    if (!docente) {
        errors.push({ text: "Por Favor ingresar un Docente." });
    }
    if (!cantestu) {
        errors.push({ text: "Ingrese la cantidad de Estudiantes" });
    }
    if (!materia) {
        errors.push({ text: "Por Favor ingresar Materia." });
    }
    if (!fecha) {
        errors.push({ text: "Por Favor ingresar una Fecha." });
    }
    if (!aula) {
        errors.push({ text: "Por Favor ingresar el Aula." });
    }
    if (!hora) {
        errors.push({ text: "Por Favor Selecionar la Hora." });
    }
    if (!carrera) {
        errors.push({ text: "Ingrese la Carrera" });
    }
    if (errors.length > 0) {
        res.render("notes/new-note", {
            errors,
            docente,
            cantestu,
            materia,
            fecha,
            aula,
            hora,
            carrera
        });
    } else {
        const newNote = new Note({ docente, cantestu, materia, fecha, aula, hora, carrera });
        newNote.user = req.user.id;
        await newNote.save();
        req.flash("success_msg", "Reserva Agregada");
        res.redirect("/notes");
    }
};

notesCtrl.renderNotes = async(req, res) => {
    const notes = await Note.find({ user: req.user.id }).sort({ date: "desc" });
    res.render("notes/all-notes", { notes });
};

notesCtrl.renderEditForm = async(req, res) => {
    const note = await Note.findById(req.params.id);
    if (note.user != req.user.id) {
        req.flash("error_msg", "No Autorizado");
        return res.redirect("/notes");
    }
    res.render("notes/edit-note", { note });
};

notesCtrl.updateNote = async(req, res) => {
    const { docente, cantestu, materia, fecha, aula, hora, carrera } = req.body;
    await Note.findByIdAndUpdate(req.params.id, { docente, cantestu, materia, fecha, aula, hora, carrera });
    req.flash("success_msg", "Reserva Actualizada");
    res.redirect("/notes");
};

notesCtrl.deleteNote = async(req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    req.flash("success_msg", "Reserva Borrada");
    res.redirect("/notes");
};

module.exports = notesCtrl;