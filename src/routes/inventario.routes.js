const express = require("express");
const router = express.Router();

// Controllers
const { renderInsumos, renderMoviliario, renderSimulador, renderVarios } = require("../controllers/inventario.controller");

router.get("/inventario/insumos", renderInsumos);
router.get("/inventario/moviliario", renderMoviliario);
router.get("/inventario/simuladores", renderSimulador);
router.get("/inventario/varios", renderVarios);

module.exports = router;