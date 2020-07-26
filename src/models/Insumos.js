const { Schema, model } = require("mongoose");

const InsumosSchema = new Schema({
    cantidad: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    armario: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = model("Insumos", InsumosSchema);