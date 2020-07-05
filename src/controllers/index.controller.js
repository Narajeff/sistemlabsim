const indexCtrl = {};

indexCtrl.renderIndex = (req, res) => {
    res.render('index');
};

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