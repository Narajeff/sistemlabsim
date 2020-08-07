const express = require("express");
const router = express.Router();

// Controllers
const {
    renderInsumos,
    renderMoviliario,
    renderSimulador,
    renderVarios,
    renderInsumosForm,
    createNewInsumo
} = require("../controllers/inventario.controller");

router.get("/inventario/insumos", renderInsumos);
router.get("/inventario/moviliario", renderMoviliario);
router.get("/inventario/simuladores", renderSimulador);
router.get("/inventario/varios", renderVarios);



// Helpers
const { isAuthenticated } = require("../helpers/auth");

// New Insumo
router.get("/inventario/insumo-add", isAuthenticated, renderInsumosForm);

router.post("/inventario/new-insumo", isAuthenticated, createNewInsumo);
//router.get("/inventario/new-insumo", renderNewinsu);

// Select Pedido


module.exports = router;