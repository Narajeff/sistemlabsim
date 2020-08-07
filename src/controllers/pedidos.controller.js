const pedidoCtrl = {};

// Models
const Pedidos = require("../models/Pedidos");

pedidoCtrl.renderPedidoForm = (req, res) => {
    res.render("pedidos/new-pedido");
};

pedidoCtrl.createNewPedido = async(req, res) => {
    const { cantidad, descripcion } = req.body;
    const errors = [];
    if (!cantidad) {
        errors.push({ text: "Por Favor ingresar la Cantidad." });
    }
    if (!descripcion) {
        errors.push({ text: "Ingrese Una Descripcion del Insumo" });
    }
    if (errors.length > 0) {
        res.render("pedidos/new-pedido", {
            errors,
            cantidad,
            descripcion
        });
    } else {
        const newPedido = new Pedidos({ cantidad, descripcion });
        newPedido.user = req.user.id;
        await newPedido.save();
        req.flash("success_msg", "Pedido de Insumo Agregado");
        res.redirect("/pedidos/insumos-pedidos");
    }
}

pedidoCtrl.renderPedidos = async(req, res) => {
    const pedidos = await Pedidos.find();
    res.render("./pedidos/insumos-pedidos", { pedidos });
};

module.exports = pedidoCtrl;