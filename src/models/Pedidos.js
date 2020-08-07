const { Schema, model } = require("mongoose");

const PedidosSchema = new Schema({
    cantidad: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },

}, {
    timestamps: true
});

module.exports = model("Pedidos", PedidosSchema);