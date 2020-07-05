const inventarioCtrl = {};

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