const inventarioCtrl = {};

const Insumos = require("../models/Insumos");

inventarioCtrl.renderInsumosForm = (req, res) => {
    res.render("inventario/new-insumo");
};


inventarioCtrl.createNewInsumo = async(req, res) => {
    const { cantidad, descripcion, armario } = req.body;
    const errors = [];
    if (!cantidad) {
        errors.push({ text: "Por Favor ingresar la Cantidad del Insumo." });
    }
    if (!descripcion) {
        errors.push({ text: "Ingrese Una Descripcion del Insumo" });
    }
    if (!armario) {
        errors.push({ text: "Por Favor ingresar En que Armario Se Encuentra." });
    }
    if (errors.length > 0) {
        res.render("inventario/new-insumo", {
            errors,
            cantidad,
            descripcion,
            armario
        });
    } else {
        const newInsumo = new Insumos({ cantidad, descripcion, armario });
        //newInsumo.user = req.user.id;
        await newInsumo.save();
        req.flash("success_msg", "Insumo Agregado");
        res.redirect("/inventario/insumos");
    }
};




inventarioCtrl.renderInsumos = (req, res) => {
    res.render('inventario/insumos');
};

inventarioCtrl.renderMoviliario = (req, res) => {
    res.render('inventario/moviliario');
};

inventarioCtrl.renderSimulador = (req, res) => {
    res.render('inventario/simuladores');
};

inventarioCtrl.renderVarios = (req, res) => {
    res.render('inventario/varios');
};


module.exports = inventarioCtrl;