const indexCtrl = {};

const Insumos = require("../models/Insumos");

indexCtrl.renderIndex = (req, res) => {
    res.render('index');
};


indexCtrl.renderIni = async(req, res) => {
    const selectInsumos = await Insumos.find();
    res.render("selectable", { selectInsumos });
};


//indexCtrl.renderIni = (req, res) => {
//  res.render('selectable');
//};

indexCtrl.renderHabilidades = (req, res) => {
    res.render('habilidadesclinicas');
};

indexCtrl.renderGabinete = (req, res) => {
    res.render('gabineteenfermeria');
};

indexCtrl.renderSimulacion = (req, res) => {
    res.render('centrosimulacion');
};

module.exports = indexCtrl;