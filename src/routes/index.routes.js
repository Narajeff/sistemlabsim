const express = require("express");
const router = express.Router();

// Controllers
const { renderIndex, renderIni, renderHabilidades, renderGabinete, renderSimulacion, } = require("../controllers/index.controller");

router.get("/", renderIndex);
router.get("/selectable", renderIni)
router.get("/habilidadesclinicas", renderHabilidades);
router.get("/gabineteenfermeria", renderGabinete);
router.get("/centrosimulacion", renderSimulacion);

module.exports = router;